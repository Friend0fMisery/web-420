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

const User = module.exports = mongoose.model('User', userSchema);

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
};