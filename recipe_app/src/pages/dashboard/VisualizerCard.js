import React from 'react';
import "../css/dashboard.css";
import picture from "../../images/2.png";

function VisualizerCard({ title, ingredients, instructions }) {

    return (
        <div style={{ display: "flex", margin: "30px auto" }} key={`${title}`} className="container d-flex justify-content-center">

            <div className="card p-3" style={{ width: 500 }}>
                <label for="card p-3">See your recipe</label>
                <img className="recipeImage" src={picture} />
                <div className="d-flex align-items-center" style={{ padding: "2%" }}>

                    <div className="ml-3 w-100">
                        <h3 className="mb-0 mt-0 recipeTitle" >{title ? title : "Your Recipe Title"}</h3>
                        <h5 style={{ padding: "25px 0px 0px 0px", color:"#4D4D4D" }}>Ingredients</h5>
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

                        <h5 style={{ padding: "25px 0px 0px 0px", color:"#4D4D4D" }}>Instructions</h5>
                        <div className="">
                            {

                                instructions.map((instruction, index) => {
                                    if (!instruction) return
                                    return (
                                        <p className="instructions" key={instruction + index}>{index}. {instruction}</p>
                                    )
                                })
                            }
                        </div>
                        <label for="button mt-2">Buttons for demonstrative purpose</label>
                        <div className="button mt-2 d-flex flex-row align-items-center" style={{ marginLeft: "25px" }} >
                            <button className="btn btn-warning" style={{ width: "90%", margin: "5px 15px" }}> Delete</button>
                            <button className="btn btn-primary" style={{ margin: "5px 15px", width: "90%" }}>Update </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VisualizerCard
