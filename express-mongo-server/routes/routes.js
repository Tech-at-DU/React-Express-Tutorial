const express = require('express');
const Model = require('../models/model');

const router = express.Router()

module.exports = router;


//Post Method
router.post('/post', async (req, res) => {
	const { title, desc, address, hours, lat, lon } = req.body

	console.log(title, desc, address, hours, lat, lon)
	res.json({ title, desc, address, hours, lat, lon })

  // const data = new Model({
  //   name: req.body.name,
  //   age: req.body.age
  // })

  // try {
  //   const dataToSave = await data.save();
  //   res.status(200).json(dataToSave)
  // }
  // catch (error) {
  //   res.status(400).json({ message: error.message })
  // }
})

// Get all Method
router.get('/sfpopos', async (req, res) => {
  console.log('/sfpopos')
    try {
        const data = await Model.find();
        res.json(data)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

// Get by ID Method
router.get('/sfpopos/:id', async (req, res) => { 
	console.log('get one')
	try {
		const options = { id: req.params.id.toString() }
		const data = await Model.findOne(options)
		console.log(options)
		console.log(req.params.id)
		console.log(data)
		res.json(data)
	} catch(error) {
		res.status(500).json({message: error.message})
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