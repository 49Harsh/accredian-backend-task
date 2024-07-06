const express = require('express');
const dotenv = require('dotenv');
const referralRoutes = require('./routes/referralRoutes.js');
const cors = require('cors');
const http = require('http')

// Load environment variables from .env file
dotenv.config();
const app = express();

const server = http.createServer(app);


// Enable CORS to allow cross-origin requests
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Mount referral routes
app.use('/api', referralRoutes);

app.use("/",(req,res) =>{
  res.send("Welcome to the referral API")
})



// Get port from environment variable or default to 5001
const PORT = process.env.PORT || 5001;

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;