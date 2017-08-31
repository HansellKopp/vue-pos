'use strict'

var express = require('express')
var router  = express.Router()

// retrieve all Tables
//
router.get('/', function(req, res) {
    res.status(200).json([
      {
        place: 'Terrace',
        number: '001',
      },
      {
        place: 'Terrace',
        number: '002',
      },
      {
        place: 'Terrace',
        number: '003',
      },
      {
        place: 'Salon',
        number: '004',
      },
      {
        place: 'Salon',
        number: '005',
      },
      {
        place: 'Salon',
        number: '006',
      },
      {
        place: 'Salon',
        number: '007',
      }
    ])
})

module.exports = router