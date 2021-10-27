import React, { useState, useEffect } from 'react'
import M from 'materialize-css'
import 'font-awesome/css/font-awesome.min.css';
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Card from './Card';
import VisualizerCard from './VisualizerCard';

const Edit = () => {
    const history = useHistory()
    var [recipe_title, setRecipeTitle] = useState("")
    var [recipe_ingredients, setRecipeIngredients] = useState([""])
    var [recipe_instructions, setRecipeInstructions] = useState([""])
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const { postid } = useParams()
    console.log(postid)
    useEffect(() => {
        if (url) {
            fetch(`/updaterecipe/${postid}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    title: recipe_title,
                    ingredients: recipe_ingredients,
                    steps: recipe_instructions,
                    pic: url
                })
            }).then(res => res.json())
                .then(data => {

                    if (data.error) {
                        M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                    }
                    else {
                        M.toast({ html: "Recipe Updated Successfully", classes: "#43a047 green darken-1" })
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

    const cardInputFeildStyle = {
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
        width: "500px",
    }
    const inputStyle = {
        margin: "10px 20px 25px",
        maxWidth: "450px",
        padding: "30px",
        textAlign: "center",
        borderRadius : "20px",
        background: "#e0e0e0",
        boxShadow:  "5px 5px 10px #bebebe,-5px -5px 10px #ffffff",
    }

    return (
        <div className="conatiner-fluid" style={{ padding: "1% 15% 0% 15%", backgroundColor: "#E0E0E0" }}>
            <div style={{ textAlign: "center", color: "#2E357E", padding: "20px", fontSize: "4rem" }}>
                <h3 >Update your recipe</h3>
            </div>
            <div style={{ display: "flex" }}>
                <div>
                    <VisualizerCard title={recipe_title} ingredients={recipe_ingredients} instructions={recipe_instructions} />
                </div>

                <div className="card input-filed" style={cardInputFeildStyle}>
                    <label for="RecipeTitle" style={{ margin: "20px auto 0px auto" }} className="labelClass">Recipe Title</label>
                    <input
                        type="text"
                        id="RecipeTitle"
                        placeholder="Recipe Title"
                        value={recipe_title}
                        onChange={(e) => setRecipeTitle(e.target.value)}
                        style={{ padding: "", maxWidth: "400px", margin: "auto auto 20px auto" }}
                    />

                    <label for="ingredients" className="labelClass">Ingredients</label>
                    {/* ingredients new input */}
                    <div id="ingredients" style={inputStyle}>
                        {recipe_ingredients.map((ingredient, index) => {
                            return <Card ingred={ingredient} index={index} setRecipeIngredients={setRecipeIngredients} propName={"Enter Ingredient"} />
                        })}
                        <div>
                            <button className="btn btn-danger waves-effect waves-light " style={{ margin: "0px 0px 0px 10px" }} onClick={() => deleteIngredient(recipe_ingredients.length - 1)} > Delete </button>
                        </div>
                    </div>

                    {/* ingredients input ends */}

                    {/* ingredients new input */}

                    <label for="Instructions" className="labelClass">Instructions</label>
                    <div id="Instructions" style={inputStyle}>
                        {recipe_instructions.map((instruction, index) => {
                            return <Card ingred={instruction} index={index} setRecipeIngredients={setRecipeInstructions} propName={"Enter Instruction"} />
                        })}
                        <div>
                            <button className="btn btn-danger waves-effect waves-light" style={{ margin: "0px 0px 0px 10px", padding: "0px auto" }} onClick={() => deleteInstruction(recipe_instructions.length - 1)} > Delete </button>
                        </div>
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
                    <button style={{ margin: "20px 0px" }} className="btn btn-primary waves-effect waves-light #64b5f6  darken-1"
                        onClick={() => postDetails()}

                    >
                        Update
                    </button>

                </div>

            </div>
            </div>

            )
}

            export default Edit
