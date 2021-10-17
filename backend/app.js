const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const {PORT,MONGODB_URL} = require("./config/dev.js");

mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log("Connected to Database");
})
mongoose.connection.on('error',(err)=>{
    console.log("Error Connecting to Databse",err);
})

require('./models/user');
require('./models/recipe');

app.use(express.json());

app.listen(PORT,()=>{
    console.log("server is running on",PORT);
})

