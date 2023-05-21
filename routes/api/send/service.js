// Import Package
require('dotenv').config()
const fs = require('fs')

module.exports = {
  getTranscript: async (file) => {
    // Init OpenAI Module
    const { Configuration, OpenAIApi } = require('openai')
    const configuration = new Configuration({ apiKey: process.env.OPENAI_TOKEN })
    const openai = new OpenAIApi(configuration)

    const transcript = await openai.createTranscription(fs.createReadStream(file), 'whisper-1')
    return transcript.data.text
  },
  getChatGPTResponse: async (transcript) => {}
}
