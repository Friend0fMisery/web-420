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

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
});

module.exports = mongoose.model('User', userSchema);