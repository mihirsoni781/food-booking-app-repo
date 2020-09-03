const mongoose = require('mongoose');
module.exports = mongoose.model('admins',{
    name: String,
    email: String,
    phone: Number,
    password: String
})
