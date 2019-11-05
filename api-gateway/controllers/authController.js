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

var User = require('../models/user');

exports.user_register = function(req, res) {
    res.send('NOT IMPLEMENTED: User registration POST');
};

exports.user_token = function(req, res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
};