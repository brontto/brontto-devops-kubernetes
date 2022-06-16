const fs = require('fs')

const read = (file) => {
    return fs.readFileSync(file, 'utf-8')
}

module.exports = {
    read
}
