'use strict'

const express = require('express')
const router = express.Router()


// Base GET request, render landing page
router.get('/', (req, res, next) => {
    res.render('index.pug')
})

router.get('/author/', (req, res, next) => {
    res.render('author.pug')
})


module.exports = router
