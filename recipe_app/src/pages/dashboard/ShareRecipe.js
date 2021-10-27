import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import "./../css/dashboard.css"
import FadeLoader from "react-spinners/FadeLoader";
import override from "./utility";

const ShareRecipe = () => {

    const [data, setData] = useState();
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [photo, setPhoto] = useState("");
    const { postid } = useParams();
    let [color, setColor] = useState("#F46E45");
    console.log(postid);
    useEffect(() => {
        fetch(`/recipes/${postid}`, {
            method: 'get',
            headers: {
                "Content-Type": "application/json",                
                }
        }).then(res => res.json())
            .then(result => {
                console.log(result.recipeDetails)
                setTitle(result.recipeDetails.title)
                setIngredients(result.recipeDetails.ingredients);
                setSteps(result.recipeDetails.steps);
                setPhoto(result.recipeDetails.photo);
                setData(result.recipeDetails)
            })
    }, [])

    

    function copy() {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }

    return (
        <div style={{ backgroundColor: "#e0e0e0" }}>
            <div className="home container" style={{ padding: "4%", marginBottom: "0px", display: "flex", flexDirection: "row", flex: "1 1 auto" }} >
                    {title === "" ? <FadeLoader color={color} css={override} size={150} /> : <div key = {"0" + title} className="container mt-5 d-flex justify-content-center" >
                        <div className="card recipe-cards p-3">
                            <img className="recipeImage" src={photo} />
                            <div className="d-flex align-items-center" style={{ padding: "2%" }}>

                                <div className="ml-3 w-100">
                                    <h3 className="mb-0 mt-0" style={{ margin: "40px 0px 40px 0px" }}>{title}</h3>
                                    <h5 className="" style={{ padding: "25px 0px 0px 0px", color: "#4D4D4D" }}>Ingredients</h5>
                                    <div className="">
                                        {

                                            ingredients.map((ingredient, index) => {
                                                if (!ingredient) return
                                                return (
                                                    <span className="ingredients" key={ingredient + index}>{ingredient}</span>
                                                )
                                            })
                                        }
                                    </div>

                                    <h5 className="" style={{ marginTop: "25px", color: "#4D4D4D" }}>Instructions</h5>
                                    <div className="" >
                                        {

                                            steps.map((instruction, index) => {
                                                if (!instruction) return
                                                return (
                                                    <p className="instructions" key={instruction + index}>{index}. {instruction}</p>
                                                )
                                            })
                                        }
                                    </div>
                                    <button className="btn btn-primary" style={{margin:"20px 175px"}}  onClick ={()=> copy() }>Copy URL</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                    
            </div>
        </div>
    )
}

export default ShareRecipe;