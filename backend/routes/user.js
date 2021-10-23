const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const userLogin  = require('../middleware/userLogin')
const Recipe =  mongoose.model("Recipe")
const User = mongoose.model("User")


router.get('/user/:id',userLogin,(req,res)=>{
    User.findOne({_id:req.params.id})
    .select("-password")
    .then(user=>{
         Recipe.find({postedBy:req.params.id})
         .populate("postedBy")
         .exec((err,recipes)=>{
             if(err){
                 return res.status(422).json({error:err})
             }
             res.json({user,recipes})
         })
    }).catch(err=>{
        return res.status(404).json({error:"User not found"})
    })
})


router.put('/updatepic',userLogin,(req,res)=>{
    User.findByIdAndUpdate(req.user._id,{$set:{pic:req.body.pic}},{new:true},
        (err,result)=>{
         if(err){
             return res.status(422).json({error:"pic canot post"})
         }
         res.json(result)
    })
})


module.exports = router