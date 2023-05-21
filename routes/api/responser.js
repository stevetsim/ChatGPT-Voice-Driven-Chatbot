// Import Packages
require('dotenv').config()

module.exports = {
  generate: (route, method, status, message, data) => {
    const response = { success: status, message, data }
    console.info(`@${method} ${route} - ${status} - JSON Response: ${JSON.stringify(response)}`)
    return response
  }
}
