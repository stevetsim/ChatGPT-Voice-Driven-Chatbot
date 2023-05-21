// Import Package
require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai')

// Open AI Module Init
const configuration = new Configuration({ apiKey: process.env.OPENAI_TOKEN })
const openai = new OpenAIApi(configuration)

module.exports = {
  getTranscript: async (file) => {
    try {
      const transcript = await openai.createTranscription(file, 'whisper-1')
      return { success: true, data: transcript.data.text }
    } catch (error) {
      return { success: false, message: error.message }
    }
  },
  getChatGPTResponse: async (transcript) => {
    try {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: transcript
      })
      return { success: true, data: completion.data.choices[0].text }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }
}
