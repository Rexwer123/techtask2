// Serverless express app

'use strict'

// Importing dependencies
const express = require('express')
const helmet = require('helmet')

// Importing server config
const config = require('./configs/app.config')

 // Initializing express server instance
const app = express()

// Middleware
app.use(helmet())
app.use(express.json())

// Route
app.post('/', checkForAlertsController)

module.exports = app