import React, { useState, useEffect } from 'react'
import M from 'materialize-css'
import { useHistory } from 'react-router-dom'
import { produce } from "immer";
import Card from './Card.js';

const AddRecipe = () => {
    const history = useHistory()
    var [recipe_title, setRecipeTitle] = useState("")
    var [recipe_ingredients, setRecipeIngredients] = useState([""])
    var [recipe_instructions, setRecipeInstructions] = useState([""])
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    useEffect(() => {
        if (url) {
            fetch("/addrecipe", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    recipe_title,
                    recipe_ingredients,
                    recipe_instructions,
                    pic: url
                })
            }).then(res => res.json())
                .then(data => {

                    if (data.error) {
                        M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                    }
                    else {
                        M.toast({ html: "Created Contact Successfully", classes: "#43a047 green darken-1" })
                        history.push('/')
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    }, [url])


    const postDetails = () => {
        const data = new FormData()
        data.append("file", image)

        data.append("upload_preset", "recipe_pics")
        data.append("cloud_name", "talkytalky")
        fetch("https://api.cloudinary.com/v1_1/talkytalky/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const cardInputFeildStyle = {
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center"
    }
    // function handleChangeIngredient(index, newValue)

    function deleteIngredient(index) {
        const values = [...recipe_ingredients];
        values.splice(index, 1);
        setRecipeIngredients(values);
        console.log(values)
    }

    function deleteInstruction(index) {
        const values = [...recipe_instructions];
        values.splice(index, 1);
        setRecipeInstructions(values);
        console.log(values)
    }


    return (
        <div>
            <h3 style={{ textAlign: "center", color: "#2E357E", marginTop: "50px", fontSize: "40px" }}>Add new recipe</h3>


            <div className="card input-filed" style={cardInputFeildStyle}>

                <input
                    type="text"
                    placeholder="Recipe Title"
                    value={recipe_title}
                    onChange={(e) => setRecipeTitle(e.target.value)}
                />

                {/* ingredients new input */}
                <div className="card input-filed" style={cardInputFeildStyle}>
                    {recipe_ingredients.map((ingredient, index) => {
                        return <Card ingred={ingredient} index={index} deleteIngredient={deleteIngredient} setRecipeIngredients={setRecipeIngredients} propName={"Enter Ingredient"}/>
                    })}
                </div>

                {/* ingredients input ends */}

                {/* ingredients new input */}
                <div className="card input-filed" style={cardInputFeildStyle}>
                    {recipe_instructions.map((instruction, index) => {
                        return <Card ingred={instruction} index={index} deleteIngredient={deleteInstruction} setRecipeIngredients={setRecipeInstructions} propName={"Enter Instruction"} />
                       
                    })}
                </div>

                {/* ingredients input ends */}

                <div className="file-field input-field">
                    <div className="btn btn-primary #64b5f6 darken-1">
                        <span>Upload Image</span>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <button className="btn btn-primary waves-effect waves-light #64b5f6  darken-1"
                    onClick={() => postDetails()}

                >
                    Add Recipe
                </button>

            </div>
        </div>
    )
}


export default AddRecipe
