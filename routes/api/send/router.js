// Import Middleware
const express = require('express')
const router = express.Router({ mergeParams: true })

// Import controller
const {} = require('./controller')

// Route for /auth
router.route('/').post()

module.exports = router
