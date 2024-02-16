const crypto = require('crypto');
require('dotenv').config({path:"backend/configration/config.env"})
function encrypt(data) {
  const secretKey = process.env.KEY;
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encrypted = cipher.update(data, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

module.exports = {
  encrypt,
};


