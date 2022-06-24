const mongoose = require('mongoose')
const config = require('../services/config')

const url = `mongodb://${config.MONGO_INITDB_ROOT_USERNAME}:${config.MONGO_INITDB_ROOT_PASSWORD}@mongodb-svc:27017/todos?authSource=admin`
//const url = 'mongodb://bron:bonton@localhost:27017/test?authSource=admin'

mongoose.connect(url)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })


const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        minlength: 5,
        required: true
    },
    done: Boolean,
})

todoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Todo', todoSchema)