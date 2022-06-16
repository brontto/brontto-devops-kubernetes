require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const schedule = require('node-schedule')
const files = require('./services/files')
const todoRouter = require('./controllers/todos')

const app = express()
app.use(cors())
app.use(express.static('build'))
app.use(morgan('tiny'))

app.use(todoRouter)

files.downloadFile()

schedule.scheduleJob('0 0 * * *', () => {
  files.removeFile()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})