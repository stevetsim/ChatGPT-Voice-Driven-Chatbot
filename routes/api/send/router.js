// Import Middleware
const express = require('express')
const router = express.Router({ mergeParams: true })

// Import controller
const { sendMessage } = require('./controller')

// Route for /auth
router.route('/').post(sendMessage)

module.exports = router
