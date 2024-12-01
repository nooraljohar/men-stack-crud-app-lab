const mongoose = require('mongoose')

const clothesSchema = new mongoose.Schema({
  Types: String,
  available: Boolean
})

const clothes = mongoose.model('clothes', clothesSchema)
module.exports = clothes