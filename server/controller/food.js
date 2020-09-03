const express = require('express')
const router = express.Router()
const Category = require('../models/category');
const Food = require('../models/food');
const getFile = require('../controller/getFile');

router.get('/getAllCat',(req,res)=>{
    Category.find({})
        .exec((err,dox)=>{
            if(err)
                console.log(err);
            else
                res.send(dox)
        })
})

router.get('/getFoodsByCatId/:catId',(req,res)=>{
    console.log('hi');
    Food.find({catId:req.params.catId})
        .exec((err,dox)=>{
            if(err){
                console.log(err);
                return
            }
            else{
                res.send(dox)
            } 
        })
})

router.get('/getFoodById/:fid',(req,res)=>{
    Food.findById(req.params.fid,(err,doc)=>{
        if(err)
            console.log(err);

        else    
            res.send(doc)
    })
})

module.exports = router