'use strict'

// Importing dependencies
const express = require('express')
const helmet = require('helmet')
const paperwork = require('paperwork')

// Importing server config
const config = require('./configs/app.config')

// Controller
const checkForAlertsController = require('./controllers/checkForAlertsController')

 // Initializing express server instance
const app = express()

// Middleware
app.use(helmet())
app.use(express.json())

// Route
app.post('/', paperwork.accept(
    {
        productId: String,
        retailers: [{
          retailerId: String,
          retailPrice: Number,
          discountPrice: paperwork.optional(Number),
          isInStock: Boolean
        }]
      }
),checkForAlertsController)

module.exports = app