const express = require('express');
const router = express.Router()
const User = require('../models/user');
const crypto = require('crypto');
const config = require('../config');
const { route } = require('./AdminController');
const user = require('../models/user');
const jwt = require('jsonwebtoken')
const verifyUser = require('./verifyUser');

router.post('/signUp',(req,res)=>{
    var user = new User()

    var cipher = crypto.createCipher(config.passEncAlgo, config.passEncKey);
    user.password = cipher.update(req.body.password, 'utf8', 'hex') + cipher.final('hex');

    user.name = req.body.name;
    user.email = req.body.email;
    user.address = req.body.address;
    user.phone = req.body.phone;

    User.find({email: user.email},(err,doc)=>{
        if(doc.length)
        {
            res.send({exist:1})
            return;
        }
        else{
            user.save((err, user) => {
                if (err)
                    console.log(err);
                else
                    res.send({ saved: 1 })
            })
        }
    })

    
})

router.post('/logIn',(req,res)=>{

    var email = req.body.email;
    var cipher = crypto.createCipher(config.passEncAlgo, config.passEncKey);
    var password = cipher.update(req.body.password, 'utf8', 'hex') + cipher.final('hex');

    User.findOne({email: email})
        .exec((err,user)=>{
            if(!user)
            {   
                return res.send({found:0})
            }
            if(user.password != password)
            {
                return res.send({pass:0})
            }
            var payload = { subject: user._id};
            var token = jwt.sign(payload,config.authKey)
            console.log('Hey');
            return res.send({pass:1,token: token})
        })
})


router.get('/getUser',verifyUser,(req,res)=>{
    User.findById(req.userId,{name: 1, email: 1, address:1, phone:1})
        .exec((err,user)=>{
            if(err)
            {
                console.log(err);
                return
            }
            res.send(user);
        })
})

module.exports = router;