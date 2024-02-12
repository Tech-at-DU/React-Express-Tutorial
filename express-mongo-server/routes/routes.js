const express = require('express');
const Model = require('../models/model');
const { MongoClient } = require('mongodb');
const router = express.Router()
module.exports = router;

// Get all Method
router.get('/sfpopos', async (req, res) => {
  console.log('/sfpopos')
  const uri = process.env.MONGO_URI
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri);
  // Let's try and...
  try {
    // Connect to database
    const db = client.db('test')
    // Get a collection
    const sfpopos = db.collection('datas')
    // Turn the results into an array
    const data = await sfpopos.find().toArray()
    // Confirm this is working. 
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // console.log(data.length)
    // send a response as json
    res.json(data)
  } catch(error) {
    res.status(500).json({message: error.message})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
})

// Get by ID Method
router.get('/sfpopos/:id', async (req, res) => { 
	console.log('get one')
  const uri = process.env.MONGO_URI
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri);
  // Let's try and...
  try {
    // Connect to database
    const db = client.db('test')
    // Get a collection
    const sfpopos = db.collection('datas')
    // Turn the results into an array
    const options = { id: req.params.id.toString() }
    const data = await sfpopos.findOne(options)
    // send a response as json
    res.json(data)
  } catch(error) {
    res.status(500).json({message: error.message})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }



})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
  res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})