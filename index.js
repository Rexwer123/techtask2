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
app.post('/findPriceDrop', (req, res) => {
    
})

// Initializing a listener
app.listen(config.port, () => {
    console.log('Server running on port ', config.port)
})