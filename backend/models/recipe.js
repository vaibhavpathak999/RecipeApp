const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

let Recipe = new mongoose.Schema({
    title: {
        type: String
    },
    ingredients: [
        {type: String}
    ],
    steps: [
        {type: String}
    ],
    photo:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
});

module.exports = mongoose.model('Recipe', Recipe);


