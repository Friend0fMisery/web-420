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

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;

config.web.secret = 'topsecret';