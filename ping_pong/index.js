require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(morgan('tiny'))


let counter = 0

const write = (count) => {
  const data = count.toString()
  fs.writeFile('/usr/src/app/files/ping.txt', data, (err) => {
    if(err) {
      console.log(err)
    } else {
      console.log('Succesfully Written to File')
    }
  })
}

write(counter)

app.get('/pingpong', (req, res) => {

  res.send(`pong ${counter}`)
  counter = counter + 1
  write(counter)
})

const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})