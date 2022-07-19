require('dotenv').config()

let PORT = process.env.PORT
let POSTGRES_USER = process.env.POSTGRES_USER 
let POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
let POSTGRES_DB = process.env.POSTGRES_DB

module.exports = {
    PORT,
    POSTGRES_DB,
    POSTGRES_PASSWORD,
    POSTGRES_USER
}