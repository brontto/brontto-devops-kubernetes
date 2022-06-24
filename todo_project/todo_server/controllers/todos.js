const { downloadFile } = require('../services/files')
const todoRouter = require('express').Router()
const Todo = require('../models/todo')


todoRouter.post('/', (req, res) => {
    const body = req.body

    const todo = new Todo({
        content: body.content,
        done: body.done || false,
    })

    todo.save()
        .then(savedTodo => {
            res.json(savedTodo)
        })
        .catch(error => {
            console.log(error)
        })
})

todoRouter.get('/', (req, res) => {
    Todo.find({}).then(todos => {
        res.json(todos)
    })
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