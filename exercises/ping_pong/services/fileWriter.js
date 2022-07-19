const fs = require('fs')

const write = (data, path) => {
  fs.writeFile('/usr/src/app/ping/ping.txt', data, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Succesfully Written to File')
    }
  })
}

module.exports = {
  write
}
