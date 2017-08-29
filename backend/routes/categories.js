'use strict'

var express = require('express')
var router  = express.Router()

// retrieve all users
//
router.get('/', function(req, res) {
    res.status(200).json([
      {
        description: 'Entradas'
      },
      {
        description: 'Ensaladas'
      },
      {
        description: 'Sopas'
      },
      {
        description: 'Pastas'
      },
      {
        description: 'Pescados'
      },
      {
        description: 'Carnes'
      },
      {
        description: 'Aves'
      },
      {
        description: 'Postres'
      },
      {
        description: 'Bebidas'
      },
      {
        description: 'Bebidas Alcoholicas'
      }
    ])
})

module.exports = router