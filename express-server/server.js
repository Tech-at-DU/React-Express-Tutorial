/* eslint-disable no-console */
/* eslint-disable semi */
const express = require('express')
const bodyParser = require('body-parser')
const datajson = require('./sfpopos-data')
const { random, randomD, randomRolls } = require('./utils')

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
      "Apple",
      "Banana",
      "Orange",
      "Pear",
    ],
   })
})

// Random number route
// Test this route with: http://localhost:4000/random?n=99
// Where n=99 sets the range of the random number returned
app.get('/random', (req, res) => {
  const { n } = req.query
  const value = random(n)
  res.json({ value })
})

// /random?n=3&s=6
app.get('/randomrolls', (req, res) => {
  const { n, s } = req.query
  console.log(n, s)
  const rolls = randomRolls(n, s)
  res.json({ rolls }) // { "rolls": [1,2,3] }
})

// app.use('/quotes', (req, res, next) => {
//   try {
//     res.json(quotes.getMultiple(req.query.page));
//   } catch (err) {
//     console.error('Error while getting quotes', err.message);
//     next(err);
//   }
// });

const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
