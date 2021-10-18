const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT,
  SENDGRID_KEY:process.env.SENDGRID_API,
  EMAIL:process.env.EMAIL
};