/* eslint-disable no-console */
/* eslint-disable semi */
const express = require('express')
const bodyParser = require('body-parser')
const datajson = require('./sfpopos-data')

// Create server
const app = express()
// Add some middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// **********************************************************
// Test this route in your browser it returns a json object.
// Add some new properties if you like.
app.get('/about', (req, res) => {
  // An object
  const message = { message: 'Hello World' }
  // send a response as json
  res.json(message)
})


// **********************************************************
// This route retursn the shpopos json data.
app.get('/sfpopos', (req, res) => {
  // You could load data from a database and send
  // it out as a response
  // send the sfpopos data
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

const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
