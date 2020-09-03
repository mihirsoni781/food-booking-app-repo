const jwt = require('jsonwebtoken')
const config = require('../config');
const User = require('../models/user');

verifyUser = function (req, res, next) {
    console.log('verifyingUser');
    if (!req.headers.authorization) {
        return res.status(401).send({ access: 0 });
    }
    let token = req.headers.authorization.split(" ")[1];
    if (token === 'null') {
        return res.status(401).send({ access: 0 })
    }
    var payload = jwt.verify(token, config.authKey)
    if (!payload) {
        return res.status(401).send({ access: 0 })
    }
    
    let userId = payload.subject;

    User.findById(userId,(err,usr)=>{
        if(err)
        {
            console.log(err);
            return
        }
        if(usr){
            req.userId = usr._id;
            next()
        }

    })

    
}

module.exports = verifyUser;