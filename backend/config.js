const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  USER: process.env.EMAIL, 
  PASS: process.env.PASS
};