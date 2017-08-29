'use strict'

var express = require('express')
var router  = express.Router()

// retrieve all users
//
router.get('/', function(req, res) {
    res.status(200).json([
      {
        username: 'Pedro Obando',
        email: 'obandop@gmail.com',
        userType: 'admin'
      },
      {
        username: 'Hansell Kopp',
        email: 'hansellkopp@gmail.com',
        userType: 'admin'
      },
      {
        username: 'Michael Foucault',
        email: 'michy@academie.com',
        userType: 'user'
      },
    ])
})

module.exports = router