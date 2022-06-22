require('dotenv').config()

let PORT = process.env.PORT
let MESSAGE = process.env.MESSAGE

module.exports = {
    PORT,
    MESSAGE
}