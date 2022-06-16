require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const pingpongRouter = require('./controllers/pingpong')
const { write } = require('./services/fileWriter')

const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use('/pingpong', pingpongRouter)


let counter = 0
write(counter.toString())

const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})