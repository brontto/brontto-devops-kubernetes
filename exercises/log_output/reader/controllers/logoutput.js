const logRouter = require('express').Router()
const read = require('../services/fileReader').read
const path = require('path')
const axios = require('axios')
const MESSAGE = require('../services/config').MESSAGE

const logDirectory = path.join('/', 'usr', 'src', 'app', 'files')
const logPath = path.join(logDirectory, 'temp.txt')

const pingURL = 'http://pingpong-svc:2347/pingpong/pingcount'


logRouter.get('/', async (req, res) => {
    const hash = read(logPath)
    let pingpong = 0
    await axios
        .get(pingURL)
        .then(response => {
            pingpong = response.data
        })

    res.status(200).send(`${MESSAGE} <br>${hash} <br>Ping / Pongs: ${pingpong}`)
})

module.exports = logRouter