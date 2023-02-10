/* eslint-disable no-console */
/* eslint-disable semi */
const express = require('express')
const bodyParser = require('body-parser')
const datajson = require('./sfpopos-data')
// const quotes = require('./services/quotes');

const { random, randomD, randomRolls } = require('./utils')
const req = require('express/lib/request')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ** Proxy from React can't get at '/' for some reason?
// Apparently this is expected behavior... **
// Test this route with: localhost:4000/
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.get('/sfpopos', (req, res) => {
  // send the sfpopos data 
  console.log('sfpopos requested!')
  res.json(datajson)
})

// A simple route that returns a JSON object
// Test this route with:
app.get('/about', (req, res) => {
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
