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
app.use(require('./routes/auth'));
app.use(require('./routes/user'));
app.use(require('./routes/recipe'));

// if(process.env.NODE_ENV=="production"){
//     app.use(express.static('client/build'))
//     const path = require('path')
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }

app.listen(PORT,()=>{
    console.log("server is running on",PORT);
})

