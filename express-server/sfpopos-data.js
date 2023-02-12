const fs = require('fs');

function readJsonFileSync(filepath, encoding) {
  if (typeof (encoding) === 'undefined') {
    encoding = 'utf8';
  }
  const file = fs.readFileSync(filepath, encoding);
  const data = JSON.parse(file);
  return data;
}

function loadJSON(file) {
  const filepath = `${__dirname}/${file}`;
  return readJsonFileSync(filepath);
}

// load sfpopos-data.json
const json = loadJSON('./sfpopos-data.json');

// console.log(json)

module.exports = json;
