const express = require('express');
const dotenv = require('dotenv');
const referralRoutes = require('./src/routes/referralRoutes.js');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();

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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;