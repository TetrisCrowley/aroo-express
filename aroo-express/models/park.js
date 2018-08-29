const mongoose = require('mongoose')

const parkSchema = new mongoose.Schema({
  name: String,
  address: String,
  latitude: Number,
  longitude: Number,
  pictures: []
})

module.exports = mongoose.model('Park', parkSchema)