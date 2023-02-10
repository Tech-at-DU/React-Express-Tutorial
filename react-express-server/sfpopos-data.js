const fs = require('fs')

function readJsonFileSync(filepath, encoding) {
  if (typeof (encoding) === 'undefined') {
    encoding = 'utf8'
  }
  const file = fs.readFileSync(filepath, encoding)
  return JSON.parse(file)
}

function getConfig(file) {
  const filepath = `${__dirname}/${file}`
  return readJsonFileSync(filepath)
}

// assume that config.json is in application root

const json = getConfig('./sfpopos-data.json')

// console.log(json)

module.exports = json
