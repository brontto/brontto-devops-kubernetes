require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const schedule = require('node-schedule')
const files = require('./services/files')

const app = express()
app.use(cors())
app.use(express.static('build'))
app.use(morgan('tiny'))

app.get('/info', (req, res) => {
  res.send(`<h1>Hello World</h1>`)
})


app.get('/kuva', (req, res) =>{
  console.log('kuva')
  res.sendFile('/usr/src/app/files/image.jpg')
})

files.downloadFile()

schedule.scheduleJob('0 0 * * *', () => {
  files.removeFile()
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})