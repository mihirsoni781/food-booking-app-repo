const mongoose = require('mongoose');
module.exports = mongoose.model('user',{
    name: String,
    email: String,
    phone: Number,
    address: String,
    password: String
})