'use strict'

const express = require('express')
const router = express.Router()
const preprocess = require('../modules/preprocess')

const ksas = preprocess.ksas


// Base GET request, render landing page
router.get('/', (req, res, next) => {
    const links = [].concat.apply([], Object.keys(ksas).map(key => ksas[key]))
    res.render('portfolio.pug', {
        links: links
    })
})

router.get('/author/', (req, res, next) => {
    res.render('author.pug')
})

Object.keys(ksas).forEach(key => {
    ksas[key].forEach(ksa => {

        const ksaUrl = ksa.url
        router.get(`/${ksaUrl}/`, (req, res, next) => {
            const pugFile = `sections/${key}/${ksaUrl}.pug`
            res.render(`sections/${key}/${ksaUrl}.pug`)
        })

    })
})

module.exports = router
