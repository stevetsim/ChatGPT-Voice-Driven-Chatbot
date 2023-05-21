// Import Packages
const fs = require('fs')

// Import Service Module
const responser = require('../responser')
const { getTranscript, getChatGPTResponse } = require('./service')

module.exports = {
  sendMessage: async (req, res) => {
    try {
      if (!req.file) throw Error('Missing Audio File')
      const { path, mimetype } = req.file
      console.log(req.file)
      const trans_result = await getTranscript(fs.createReadStream(path))
      if (trans_result.success) {
        const transcript = trans_result.data
      }
      fs.unlinkSync(path)
    } catch (error) {
      return res.json(responser.generate(req.originalUrl, req.method, false, error.message, {}))
    }
  }
}
