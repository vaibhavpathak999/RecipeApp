const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const userLogin = require("../middleware/userLogin");
const Recipe =  mongoose.model("Recipe")

router.post('/addrecipe',userLogin,(req,res)=>{
    const {recipe_title, recipe_ingredients, recipe_instructions, pic} = req.body 
    if(!recipe_title || !recipe_ingredients || !recipe_instructions || !pic){
      return  res.status(422).json({error:"Please add all the fields"})
    }
    req.user.password = undefined
    const recipe = new Recipe({
        title : recipe_title,
        ingredients : recipe_ingredients,
        steps : recipe_instructions,
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

router.get('/recipes/:id', (req, res)=> {
    let id = req.params.id;
    Recipe.findById(id, function(err, recipe) {
        if(recipe) {
            recipe.postedBy = null;
            return  res.status(200).json({recipeDetails:recipe})
        }
        else {
            return  res.status(422).json({error:"Recipe Not Found"})
        }
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
        if (!recipe)
        return res.status(200).json({error:"recipe is not found!"})
        else {
            const {title, ingredients, steps, pic} = req.body 
            if(!title || !ingredients || !steps || !pic){
                return  res.status(422).json({error:"Please add all the fields"})
                }
            recipe.title = title;
            recipe.ingredients = ingredients;
            recipe.steps = steps;
            recipe.photo = pic;

            recipe.save().then(recipe => {
                return res.status(200).json({message:"Succesfully updated recipe!"})
            })
            .catch(err => {
                console.log("recipe", recipe)
                return res.status(422).json({error:"Cannot Update recipe!"})
            });
        }
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