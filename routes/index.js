'use strict'

const express = require('express')
const router = express.Router()


// Base GET request, render landing page
router.get('/', (req, res, next) => {
    res.render('portfolio.pug')
})

router.get('/author/', (req, res, next) => {
    res.render('author.pug')
})

router.get('/test/', (req, res, next) => {
    res.render('sections/test.pug')
})

module.exports = router
