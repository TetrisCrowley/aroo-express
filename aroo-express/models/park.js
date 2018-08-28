const mongoose = require('mongoose')

const parkSchema = new mongoose.Schema({
  name: String,
  location: String,
  pictures: []
})

module.exports = mongoose.model('Park', parkSchema)