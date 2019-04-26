'use strict'

const express = require('express')
const router = express.Router()


// Base GET request, render landing page
router.get('/', (req, res, next) => {
    res.render('index.pug')
})


module.exports = router
