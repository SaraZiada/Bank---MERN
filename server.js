const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const api = require('./server/routes/transactionsApi.js')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bankDB', { useNewUrlParser: true })

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', api)

const port = 8888

app.listen(process.env.PORT || port, function() {
    console.log(`Running on port ${port}`)
})