const fs = require('fs')

const write = (data) => {
    fs.writeFile('/usr/src/app/files/temp.txt', data, (err) => {
        if(err) {
          console.log(err)
        } else {
          console.log('Succesfully Written to File')
        }
    })
}

module.exports = {
    write
}
