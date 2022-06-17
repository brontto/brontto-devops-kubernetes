const pingpongRouter = require('express').Router()
const { write } = require('../services/fileWriter')
const { read } = require('../services/fileReader')
const path = require('path')

const directory = path.join('/', 'usr', 'src', 'app', 'ping')
const pingPath = path.join(directory, 'ping.txt')

pingpongRouter.get('/', (req, res) => {
    counter = Number(read(pingPath))
    counter = counter + 1
    write(counter.toString())
    console.log(counter)
    res.send(`pong ${counter}`)
})

pingpongRouter.get('/pingcount', (req, res) => {
    counter = Number(read(pingPath))
    counter = counter + 1
    write(counter.toString())
    console.log(counter)
    res.send(`${counter}`)
})

module.exports = pingpongRouter