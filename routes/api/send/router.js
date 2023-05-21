// Import Middleware
const express = require('express')
const router = express.Router({ mergeParams: true })
const multer = require('multer')
const path = require('path')

// Config Middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
})
const upload = multer({ storage: storage })

// Import controller
const { sendMessage } = require('./controller')

// Route for /auth
router.route('/').post(upload.single('file'), sendMessage)

module.exports = router
