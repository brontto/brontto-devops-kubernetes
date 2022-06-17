const { downloadFile } = require('../services/files')

const todoRouter = require('express').Router()

todoRouter.get('/info', (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})


todoRouter.get('/kuva', (req, res) => {
    downloadFile()
    console.log('kuva')
    res.sendFile('/usr/src/app/files/image.jpg')
})


module.exports = todoRouter