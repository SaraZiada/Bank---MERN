const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const api = require('./server/routes/transactionsApi.js')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bankDB', { useNewUrlParser: true })

const app = express()

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', api)

const port = 8888

app.listen(process.env.PORT || port, function() {
    console.log(`Running on port ${port}`)
})