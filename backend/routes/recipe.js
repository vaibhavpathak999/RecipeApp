const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const userLogin = require("../middleware/userLogin");
const Recipe =  mongoose.model("Recipe")

router.post('/addrecipe',userLogin,(req,res)=>{
    const {title, ingredients, steps, pic} = req.body 
    if(!title || !ingredients || !steps || !pic){
      return  res.status(422).json({error:"Please add all the fields"})
    }
    req.user.password = undefined
    const recipe = new Recipe({
        title,
        ingredients,
        steps,
        photo:pic,
        postedBy:req.user
    })
    recipe.save().then(result=>{
        res.json({recipe:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/:id', (req, res)=> {
    let id = req.params.id;
    Recipe.findById(id, function(err, recipe) {
        res.json(recipe);
    });
});


router.post('/myrecipes',userLogin,(req,res)=>{
    Recipe.find({postedBy:req.user._id})
    .populate("postedBy")
    .then((recipe)=>{
        res.json({recipe})
    }).catch(err=>{
        console.log(err)
    })
});

router.put('/updaterecipe/:id',userLogin,(req,res)=>{
    Recipe.findById(req.params.id, function(err, recipe) {
        console.log("recipe", recipe)
        if (!recipe)
        return res.status(200).json({error:"recipe is not found!"})
        else
            recipe.title = req.body.title;
            recipe.ingredients = req.body.ingredients;
            recipe.steps = req.body.steps;
            recipe.recipe_favourite = req.body.recipe_favourite;
            recipe.photo = req.body.pic;

            recipe.save().then(recipe => {
                return res.status(200).json({message:"Succesfully updated recipe!"})
            })
            .catch(err => {
                return res.status(422).json({error:"Cannot Update recipe!"})
            });
    });
})


router.delete('/deleterecipe/:id',userLogin,(req,res)=>{
    Recipe.findByIdAndDelete(req.params.id, function(err){
        if(err)
            return res.status(422).json({error:"Cannot delete recipe!"})
        else {
            return res.status(200).json({message:"recipe deleted!"})
        }
    }).clone().catch(err=>{
        if(err) {
            return res.status(422).json({error:"Cannot delete recipe!"})
        }
    })
})



module.exports = router