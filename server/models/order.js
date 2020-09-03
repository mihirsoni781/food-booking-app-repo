const mongoose = require('mongoose')
module.exports = mongoose.model('order',{
    name:String,
    cost: String,
    description: String,
    quantity: Number,
    customername: String,
    customeremail: String,
    customerphone: String,
    customeraddress: String,
    customerId: String,
    orderDate: String
})
