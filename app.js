'use strict' 

// Imports
const express = require('express')
const path = require('path')
// TODO: uncomment once you have favicon
//const favicon = require('serve-favicon')

// Helper functions
const curried_join = prefix => suffix => path.join(prefix, suffix)
const root_join = curried_join(__dirname)

// Setup app
const app = express()

const static_folder = root_join('static')
app.use('/static/', express.static(static_folder))
// TODO: uncomment once you have favicon
//app.use(favicon(path.join(static_folder, 'favicon.ico')))

app.set('views', root_join('views'))
app.set('view engine', 'pug')


// Route paths
const routes_join = curried_join(root_join('routes'))

const index_routes = require(routes_join('index'))

// Use routes
app.use('/', index_routes)

// 404 handling
app.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})

// Error handling
app.use((err, req, res, next) => {
    const err_status = err.status || 500

    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development'
        ? err
        : { status: err_status }

    res.status(err_status)
    res.render('error')
})

module.exports = app
