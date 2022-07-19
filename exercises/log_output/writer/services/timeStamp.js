const addTimeStamp = (randomString) => {
    const timeStamp = Date.now()
    const date = new Date(timeStamp)
    const year = date.getFullYear().toString()
    const month = date.getMonth() >= 10 ? date.getMonth().toString() : `0${date.getMonth().toString()}` 
    const day = date.getDate() >= 10 ? date.getDate().toString() : `0${date.getDate().toString()}` 
    const hours = date.getHours().toString()
    const minutes = date.getMinutes().toString()
    const seconds = date.getSeconds().toString()
    const milliseconds = date.getMilliseconds().toString()

    return `${year}-${month}-${day}:${hours}:${minutes}:${seconds}:${milliseconds} | ${randomString}`
}

module.exports = {
    addTimeStamp
}