const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const AdminController = require('./controller/AdminController');
const db = require('./db');
const getFile = require('./controller/getFile');
const adminAuth = require('./controller/AdminAuth');
const FoodController = require('./controller/food');
const userAuth = require('./controller/userAuth');
const Orders = require('./controller/orders');
const path = require('path')
app.use(cors())
app.use(bodyParser.json())
app.use('/admin',AdminController);
app.use('/foods',FoodController);

app.use('/authAdmin',adminAuth);
app.use('/files',getFile)
app.use('/userAuth',userAuth);  
app.use('/order',Orders)

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'dist/food-booking-user')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/food-booking-user/index.html'));
})

app.listen(5000,'0.0.0.0',function(){
    console.log("\nServer running on port 5000\n");
})
