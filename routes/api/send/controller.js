// Import Packages
const fs = require('fs')

// Import Service Module
const responser = require('../responser')
const { getTranscript, getChatGPTResponse } = require('./service')

module.exports = {
  sendMessage: async (req, res) => {
    if (!req.file) return res.json(responser.generate(req.originalUrl, req.method, false, 'Missing Audio File', {}))
    const { path } = req.file

    try {
      const trans_result = await getTranscript(fs.createReadStream(path))
      if (trans_result.success) {
        const transcript = trans_result.data
        console.log(`[API] Get Transcript Success - ${transcript}`)
        const response = await getChatGPTResponse(transcript)
        if (response.success) {
          res.json(responser.generate(req.originalUrl, req.method, true, 'Create Call Success', { result: response.data }))
        } else throw Error(response.message)
      } else throw Error(trans_result.message)
    } catch (error) {
      res.json(responser.generate(req.originalUrl, req.method, false, error.message, {}))
    } finally {
      fs.unlinkSync(path)
    }
  }
}
