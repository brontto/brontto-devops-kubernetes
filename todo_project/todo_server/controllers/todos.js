const { downloadFile } = require('../services/files')

const todoRouter = require('express').Router()

var todos = [
    {
        content: 'TODO 1',
        done: false
    },
    {
        content: 'TODO 2',
        done: false
    }
]

todoRouter.post('/', (req, res) => {
    const body = req.body

    if(!body.content){
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const todo = {
        content: body.content,
        done: body.done || false
    }

    todos = todos.concat(todo)
    res.json(todo)
})

todoRouter.get('/', (req, res) => {
    res.json(todos)
})

todoRouter.get('/info', (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})


todoRouter.get('/kuva', (req, res) => {
    downloadFile()
    console.log('kuva')
    res.sendFile('/usr/src/app/files/image.jpg')
})


module.exports = todoRouter