const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  JWT_SECRET: process.env.API_URL,
  MONGODB_URL: process.env.API_KEY,
  PORT: process.env.PORT,
  SENDGRID_API:process.env.SENDGRID_API,
  EMAIL:process.env.EMAIL
};