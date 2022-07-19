const config = require('./config')
const { Client } = require('pg')

const connectionStringKube =
    `postgresql://${config.POSTGRES_USER}:${config.POSTGRES_PASSWORD}@postgres-svc/${config.POSTGRES_DB}`

const client = new Client({
    host: 'postgres-svc',
    user: config.POSTGRES_USER,
    database: config.POSTGRES_DB,
    password: config.POSTGRES_PASSWORD,
    port: '5432'
})

client.connect()

const createTableText = `
CREATE TABLE IF NOT EXISTS pingpong (
    id SERIAL,
    count INT,
    timestamp text
);
`
const init = async (text) => {
    await client.query(text)
    const timestamp = Date.now()
    await client.query(`INSERT INTO pingpong(count, timestamp) VALUES($1, $2)`, [0, timestamp])
}
init(createTableText)

const read = async () => {
    const { rows } = await client.query('SELECT count FROM pingpong WHERE "id"=1')
    console.log(rows)
    return Number(rows[0].count)
}

const write = async (count) => {
    const counter = count
    const query = `UPDATE "pingpong" SET "count" = $1 WHERE "id"=1`
    await client.query(query, [counter])
    return counter
}

module.exports = {
    read,
    write
}