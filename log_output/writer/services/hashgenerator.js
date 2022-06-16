const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

const generateString = (length) => {
    let result = ' '
    const characterCount = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characterCount))
    }
    return result
}


module.exports = {
    generateString
}