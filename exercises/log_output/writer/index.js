const { write } = require('./services/fileWriter')
const { addTimeStamp } = require('./services/timeStamp')

const generateString = require('./services/hashgenerator').generateString

const randomString = generateString(20)

const printString = () => {
    const data = addTimeStamp(randomString)

    write(data)
    console.log(data)
    setTimeout(printString, 5000)
}

printString()


