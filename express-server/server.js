/* eslint-disable no-console */
/* eslint-disable semi */
const express = require('express')
const bodyParser = require('body-parser')
const loadJSON = require('./utlis')

// load sfpopos-data.json
const datajson = loadJSON('./sfpopos-data.json');

// Create server
const app = express()
// Add some middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// **********************************************************
// Test this route in your browser it returns a json object.
// Add some new properties if you like.
app.get('/about', (req, res) => {
  // An object to convert to json
  const message = { message: 'Hello World', foo: 'bar' }
  // send a response as json
  res.json(message)
})

// Challenge: Modify the object above and test this route
// you should see the new added properties.


// **********************************************************
// This route returns the sfpopos json data.
app.get('/sfpopos', (req, res) => {
  // You could load data from a database and send
  // it out as a response
  // Here we are sending datajson
  console.log('sfpopos requested!')
  res.json(datajson)
})


// A simple route that returns a JSON object
// Test this route with:
app.get('/fruit', (req, res) => {
  // This Object is converted to JSON and returned.
  res.json({
    message: 'This is a message from the server',
    data: [
      'Apple',
      'Banana',
      'Orange',
      'Pear',
    ],
  })
})

// Challenge: Add a new route and serve your own JSON data.
// Create a new JSON file and save it to this project folder.
// Create a new route below that serves this file to the route
// as json.
// Test your route to see the json data in the browser.

const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
