const express = require('express')
const router = express.Router()
const Order = require('../models/order');
const order = require('../models/order');
const verify = require('../controller/verifyUser');
const verifyAdmin = require('./verifyAdmin');

router.post('/placeOrder',verify,(req,res)=>{
    var order = new Order()

    order.name = req.body.name;
    order.cost = req.body.cost;
    order.description = req.body.description;
    order.quantity = req.body.quantity;

    order.customername = req.body.customername;
    order.customerphone = req.body.customerphone;
    order.customeremail = req.body.customeremail;
    order.customeraddress = req.body.customeraddress;
    order.customerId = req.body.customerId;
    var date = new Date()
    order.orderDate = date.toTimeString().split(" ")[0] + ' ' + date.toDateString();
    
    order.save((err,saved)=>{
        if(err)
            console.log(err);
        else
            res.send(saved);
    })
})


router.get('/getOrdersByUserId/:id', verify,(req, res)=> {
    order.find({customerId: req.params.id},(err,docx)=>{
        if(err)
            console.log(err);
        else
            res.send(docx)
    })
})

router.get('/getAllOrders', verifyAdmin,(req,res)=>{
    Order.find({},(err,dox)=>{
        if(err)
            console.log(err);
        else    
            res.send(dox);
    })
})

module.exports  = router;