const logRouter = require('express').Router()
const read = require('../services/fileReader').read
const path = require('path')

const logDirectory = path.join('/', 'usr', 'src', 'app', 'files')
const pingDirectory = path.join('/', 'usr', 'src', 'app', 'ping')
const logPath = path.join(logDirectory, 'temp.txt')
const pingPath = path.join(pingDirectory, 'ping.txt')

logRouter.get('/', (req, res) => {
    const hash = read(logPath)
    const pingpong = read(pingPath)
    res.send(`${hash} <br>Ping / Pongs: ${pingpong}`)
})

module.exports = logRouter