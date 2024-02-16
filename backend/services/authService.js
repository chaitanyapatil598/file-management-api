// services/authService.js
const jwt = require('jsonwebtoken');
require('dotenv').config({path:"backend/configration/config.env"})

const generateToken = async (payload) => {
  try {
    const secretKey = process.env.SECRETE_KEY ;
    // Set expiration time for the token 
    const expiresIn = '24h';
    // Generate the token
    const token = jwt.sign(payload, secretKey, { expiresIn });
    return token;
  } catch (error) {
    throw new Error('Error generating token');
  }
};

module.exports = {
  generateToken,
};
