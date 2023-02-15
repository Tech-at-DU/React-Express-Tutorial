const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  desc: {
    required: true,
    type: String
  },
  address: {
    required: true,
    type: String
  },
  hours: {
    required: true,
    type: String
  },
  geo: {
    lat: { type: Number },
    lon: { type: Number }
  },
  images: [ { type: String } ],
  website: { type: String },
  features: [ { type: String } ],
  id: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('Data', dataSchema)