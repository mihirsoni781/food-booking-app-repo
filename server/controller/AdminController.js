const express = require('express')
const router  = express.Router()
const Category = require('../models/category');

const Food = require('../models/food');
const food = require('../models/food');
const category = require('../models/category');
const multer = require('multer')
const multerStorage = require('multer-storage');
const path = require('path');
const fs = require('fs');
const User = require('../models/user');

const verify = require('./verifyAdmin');


const storage =  multer.diskStorage({
    destination: './uploads/',
    filename: (req,file,cb)=>{
        console.log('working with multer');
        console.log(req.body);
        var imageName;
        console.log(req.body.image);
        if (req.body.image)
            {
                imageName = req.body.image;
            }
        else
            imageName = Date.now()+'_IMG_'+path.extname(file.originalname);
        
        req.imageName = imageName
        cb(null,imageName);
    }
})

var upload = multer({
    storage: storage
})

router.post('/addCat',verify,function(req,res){
    var cat = new Category()
    cat.name = req.body.name;
    console.log(req.body.name)
    console.log(cat);
    cat.save(function(err,doc){
        if(err)
            console.log(err);
        else{
            res.send(doc);
            console.log(doc);
        }
    })
})



router.get('/getAllCat', verify,function(req,res){
    Category.find({})
        .exec((err,dox)=>{
            if(err)
                console.log(err);
            else
                res.send(dox)
        })
})

router.post('/addFood', verify ? upload.single('file') : 0,function(req,res){
    var food = new Food()
    food.name = req.body.name;
    food.description = req.body.description;
    food.cost = req.body.cost;
    food.catId = req.body.catId;
    
    if(req.file)
        food.image = req.imageName;
    food.save((err,doc)=>{
        if(err)
            console.log(err);
        else
            res.send(doc)
    })

})



router.post('/deleteCat', verify,function(req,res){
    Category.findByIdAndRemove(req.body._id,(err,rmd)=>{
        if(err)
            console.log(err)
        else
            res.send(rmd);
    })
})

router.put('/updateCat/:id', verify,function(req,res){
    Category.findByIdAndUpdate(req.params.id,{
        $set: {name: req.body.name}
    },{
        new:true
    },(err,newCat)=>{
        if(err)
            console.log(err);
        else
            res.send(newCat);
    })
    console.log(req.body);
})

router.get('/getAllFoods',verify,(req,res)=>{
    Food.find()
        .exec((err,dox)=>{
            if(err)
            {
                console.log(err);
                return
            }
            res.send(dox)
        })
})

router.get('/removeFood/:id',verify,(req,res)=>{
    Food.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(err)
            console.log(err);
        else
        {
            res.send(doc);
            if(fs.existsSync('./uploads/' + doc.image)){
                fs.unlink('./uploads/' + doc.image, (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            }

        }
    })
})

router.post('/editFood', verify ? upload.single('file') : 0,(req,res)=>{
    console.log('editfood');
    console.log(req.body);
    var image = req.body.image;
    if (req.file)
        image = req.imageName;
    Food.findByIdAndUpdate(req.body._id,{
        $set: { name: req.body.name, catId: req.body.catId,
                cost: req.body.cost, description: req.body.description, image: image            
        }
    },{new: 1},(err,doc)=>{
        if(err)
            console.log(err);
        else{
            res.send(doc)
        }
    })
})

router.get('/getAllCustomers',verify,(req,res)=>{
    User.find({},(err,dox)=>{
        if(err)
            console.log(err);
        else
            res.send(dox)
    })
})

module.exports = router;