const pingpongRouter = require('express').Router()
const counter = require('../services/counter')

pingpongRouter.get('/', async (req, res) => {
    await counter.increment()
    count = await counter.get()
    console.log(count)
    res.send(`pong ${count}`)
})

pingpongRouter.get('/pingcount', async (req, res) => {
    await counter.increment()
    count = await counter.get()
    console.log(count)
    res.send(`${count}`)
})

module.exports = pingpongRouter