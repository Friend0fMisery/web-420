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

var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');

router.post('/auth/register', auth_controller.user_register);

router.get('/auth/token', auth_controller.user_token);

module.exports = router;