const mongoose = require('mongoose')

const clotheSchema = new mongoose.Schema({
  Types: String,
  available: Boolean
})

const Clothe = mongoose.model('Clothe', clotheSchema)
module.exports = Clothe


