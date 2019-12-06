/*
============================================
; Title: API Gateway
; Author: Justin Singleton
; Date: 2019
; Description: This program demonstrates the
; use of JavaScript and the ability to 
; utilize an API.
;===========================================
*/

var jwt = require('jsonwebtoken');
var config = require('./config');

// check for a valid JSON token //

function checkToken(req, res, next) {
    var token = req.headers['x-access-token'];

    if(!token)
        return res.status(403).send({auth: false, message: 'No token provided.'});
    
    jwt.verify(token, config.web.secret, function(err, decoded) {
        if(err) return res.status(500).send({auth: false, message: 'Failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
};

module.exports = checkToken;