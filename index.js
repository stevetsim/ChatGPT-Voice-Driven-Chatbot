// Import Package
require('dotenv').config()
const express = require('express')

// Import Express Module
const app = express()

// Import Express Middleware
const cors = require('cors')
app.use(cors())
app.use(express.json()) // parse request body as JSON

// Routes
app.use('/api', require('./routes/api'))
app.get('/health', (req, res) => res.status(200).send('Health Check'))

// Server
app.listen(process.env.PORT, () => console.log(`[Server]: API service hosted on port ${process.env.PORT}`))
