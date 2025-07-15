// server.js
const express = require('express')
const app = express()
const PORT = 3000

// Basic GET request
app.get('/', (req, res) => {
  res.send('Congratulation from BPS! add nginx')
})

// Basic GET request
app.get('/user', (req, res) => {
  res.send('This is a user app.')
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`)
})
