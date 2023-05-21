// Import Express
const express = require('express')
const router = express.Router({ mergeParams: true })

// Routes
router.use('/send', require('./send/router'))
router.get('/', (req, res) => {
  res.send('Nexmo API')
})

module.exports = router
