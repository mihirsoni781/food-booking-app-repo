const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/getImage/:imageId',(req,res)=>{
    var d = new Buffer(fs.readFileSync('./uploads/' + req.params.imageId)).toString("base64")

    res.send({data:d})
})

module.exports = router;