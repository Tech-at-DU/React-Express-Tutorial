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

// Challenge: Use one of your own JSON files or generate a random 
// json file here: https://www.mockaroo.com
// Load your json using the function above. 
// Test your json here. 
// console.log(json)

module.exports = loadJSON;
