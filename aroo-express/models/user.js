const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  favorites: []
})

module.exports = mongoose.model('User', userSchema)