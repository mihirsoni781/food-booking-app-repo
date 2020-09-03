const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const config = require('../config');
const jwt = require('jsonwebtoken');
const verify = require('./verifyAdmin')
const Admin = require('../models/admin');
const { route } = require('./AdminController');

router.post('/signup',(req,res)=>{
    console.log('req.recived');
    var admin = new Admin()
    admin.name = req.body.name;
    admin.email = req.body.email;
    admin.phone = req.body.phone
    var cipher = crypto.createCipher(config.passEncAlgo,config.passEncKey);
    admin.password = cipher.update(req.body.password, 'utf8', 'hex') + cipher.final('hex');

    admin.save((err,admin)=>{
        if(err)
            console.log(err);
        else
            res.send({reg:1})
    })
});


router.post('/signin', (req, res) => {
    console.log('signin');
    Admin.findOne({email: req.body.email})
        .exec((err,found)=>{
            if(err)
                console.log(err);
            else{
                if(found)
                {
                    var cipher = crypto.createCipher(config.passEncAlgo, config.passEncKey);
                    var password = cipher.update(req.body.password, 'utf8', 'hex') + cipher.final('hex');

                    console.log(password+' '+found.password);
                    if(password == found.password){
                        let token = jwt.sign({subject: found._id},config.authKey)
                        res.send({token:token})
                    }
                    else
                        res.send({pass:0})
                }else{
                    res.send({founds:0})
                }
            }
        })
})

router.get('/getAdmin',verify,(req,res)=>{
    Admin.findById(req.userId,{name:1,email:1,phone:1})
        .exec((err,user)=>{
            if(err)
                console.log(err);
            else
                res.send(user)
        })
})

module.exports = router