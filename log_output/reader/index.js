require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(morgan('tiny'))


const read = (file) => {
     
    return fs.readFileSync(file, 'utf-8')
    
}

app.get('/', (req, res) => {
    const hash = read('/usr/src/app/files/temp.txt')
    const pingpong = read('/usr/src/app/files/ping.txt')
    res.send(`${hash} <br>Ping / Pongs: ${pingpong}`)
})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})