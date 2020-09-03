const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/foodservicedb',function(err){
    if(err)
        console.log(err)
    else
        console.log('MongoDB connection success');
});

module.exports = mongoose