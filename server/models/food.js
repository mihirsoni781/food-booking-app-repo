const mongoose = require('mongoose')
module.exports = mongoose.model('Food', new mongoose.Schema({
    name: String,
    description: String,
    cost: String,
    catId: String,
    image: String,
    imageDataUrl: String
}))