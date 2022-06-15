const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

const generateString = (length) => {
    let result = ' '
    const characterCount = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characterCount))
    }
    return result
}

const randomString = generateString(20)

const printable = (randomString) => {
    const timeStamp = Date.now()
    const date = new Date(timeStamp)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const milliseconds = date.getMilliseconds()

    return `${year}-${month}-${day}:${hours}:${minutes}:${seconds}:${milliseconds} | ${randomString}`
}

const fs = require('fs')


const printString = () => {
    const data = printable(randomString)

    fs.writeFile('/usr/src/app/files/temp.txt', data, (err) => {
      if(err) {
        console.log(err)
      } else {
        console.log('Succesfully Written to File')
      }
    })

    setTimeout(printString, 5000)
}

printString()


