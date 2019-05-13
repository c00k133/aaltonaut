'use strict'

const express = require('express')
const router = express.Router()
const ksas = require('../res/ksas')


// Base GET request, render landing page
router.get('/', (req, res, next) => {
    res.render('portfolio.pug')
})

router.get('/author/', (req, res, next) => {
    res.render('author.pug')
})

Object.keys(ksas).forEach(key => {
    ksas[key].forEach(ksa => {
        router.get(`/${ksa}/`, (req, res, next) => {
            res.render(`sections/${key}/${ksa}.pug`)
        })
    })
})

module.exports = router
