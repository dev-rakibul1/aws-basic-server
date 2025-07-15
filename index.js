// server.js
const express = require('express')
const app = express()
const PORT = 3000

// Basic GET request
app.get('/', (req, res) => {
  res.send('Hello, world! 🌍')
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`)
})
