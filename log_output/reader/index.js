const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const logRouter = require('./controllers/logoutput')
const config = require('./services/config')

const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use('/log_output', logRouter)

const PORT = config.PORT | 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})