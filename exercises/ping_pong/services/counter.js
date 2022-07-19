const { read, write } = require('./databaseHandler')

const get = async () => {
    const count = await read()
    return count
} 

const increment = async () => {
    const count = await read()
    await write(count + 1)
    return await read()
}

module.exports = {
    get,
    increment
}