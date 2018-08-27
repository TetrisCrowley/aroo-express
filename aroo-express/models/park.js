const mongoose = require('mongoose')

const parkSchema = new mongoose.Schema({
  location: String,
  pictures: []
})

module.exports = mongoose.model('Park', parkSchema)