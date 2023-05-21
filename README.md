# ChatGPT-Voice-Driven-Chatbot
![Node.js](https://img.shields.io/badge/Node.js-v14.16.1-green) ![Express](https://img.shields.io/badge/Express-v4.17.1-blue) ![Whisper](https://img.shields.io/badge/Whisper-API-orange) ![ChatGPT](https://img.shields.io/badge/ChatGPT-API-yellow)

---

This is a backend application that allows users to chat with ChatGPT with their voice. It integrates the Whisper API for automatic speech recognition (ASR) and the ChatGPT API for generating responses.

## Features
- Voice-based interaction with ChatGPT.
- ASR integration using Whisper for accurate speech recognition.
- Seamless conversation flow with persistent context.
- Easy to integrated to any web application.
- Provided Frontend Demo

## Prerequisites
Before running this application, make sure you have the following installed:

- **Node.js** (v14.16.1 or higher)
- **NPM** (Node Package Manager)

## Installation
1. Clone this repository to your local machine:
```bash
git clone https://github.com/stevetsim/ChatGPT-Voice-Driven-Chatbot.git
```

2. Change into the project's directory:
```bash
cd ChatGPT-Voice-Driven-Chatbot
```

3. Install the dependencies:
```bash
npm install
```

## Configuration

To use the Whisper and ChatGPT APIs, you need to provide your Open AI API key. Follow the steps below to configure the application:

1. Rename the `.env.example` file to `.env`.

2. Open the `.env` file and replace `OPENAI_TOKEN` with your actual Open AI API Key.

## Usage
1. Start the server:
```bash
node index.js
```

2. The server will be running at http://localhost:3000.

3. Use an API testing tool or a client application to send POST requests to http://localhost:3000/api/send with the following curl example:

```curl
curl --location --request POST 'localhost:3000/api/send' \
--form 'file=@"testing.mp3"'
```

4. The response will be returned as a JSON object:
```json
{
  "success": true,
  "message": "Get ChatGPT Response Success",
  "data": {
    "response": "I'm doing great. How can I assist you today?"
  }
}
```

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
MIT License