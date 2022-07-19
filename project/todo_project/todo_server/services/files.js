const fs = require('fs')
const axios = require('axios')

const directory = '/usr/src/app/files/'
const filePath = '/usr/src/app/files/image.jpg'

const downloadFile = async () => {
    if (await fileAlreadyExists()) return

    await new Promise(res => fs.mkdir(directory, (err) => res()))
    const response = await axios.get('https://picsum.photos/200', { responseType: 'stream' })
    response.data.pipe(fs.createWriteStream(filePath))
}

const removeFile = async () => new Promise(res => fs.unlink(filePath, (err) => res()))

const getFile = async () => new Promise(res => {
    fs.readFile(filePath, (err, buffer) => {
      if (err) return console.log('FAILED TO READ FILE', '----------------', err)
      res(buffer)
    })
})

const fileAlreadyExists = async () => new Promise(res => {
  fs.stat(filePath, (err, stats) => {
    if (err || !stats) return res(false)
    return res(true)
  })
})

module.exports = {
    downloadFile,
    removeFile,
    getFile,
    fileAlreadyExists
}