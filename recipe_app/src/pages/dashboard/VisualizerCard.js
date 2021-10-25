import React from 'react';
import "../css/dashboard.css";
import picture from "../../images/foodPictorial.png";

function VisualizerCard({ title, ingredients, instructions}) {

    return (
        <div style={{ display: "flex" }} key={`${title}`} className="container mt-5 d-flex justify-content-center">
            
            <div className="card p-3" style={{ width: 500 }}>
                                    <label for="card p-3">See your recipe</label>
                                    <img className="recipeImage" src={picture} />
                                    <div className="d-flex align-items-center" style={{ padding: "2%" }}>

                                        <div className="ml-3 w-100">
                                            <h3 className="mb-0 mt-0" style={{ marginTop: "0px" }}>{title ? title : "Title"}</h3>
                                            <h5 className="" style={{ marginTop: "15px" }}>Ingredients</h5>
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

                                            <h5 className="" style={{ marginTop: "15px" }}>Instructions</h5>
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

                                            <div className="button mt-2 d-flex flex-row align-items-center" style={{ marginLeft: "25px" }} >
                                                <button className="btn btn-danger" ><i className="fa fa-trash fa-2x"></i></button>
                                                <button className="btn btn-success" style={{ marginLeft: "15px" }}><i className="fa fa-pencil fa-2x" style={{ color: "white" }}></i> </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
        </div>
    )
}

export default VisualizerCard
