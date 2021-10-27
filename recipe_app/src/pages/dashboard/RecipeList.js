import React from "react";

export default function List({ recipes }) {
    return (
        <div >
                {
                    recipes.map((item, index) => {
                        return (
                            <div key={index + data.title} className="container mt-5 d-flex justify-content-center" >
                                <div className="card p-3" style={{ maxWidth: 500 }}>
                                    <img className="recipeImage" src={item.photo} />
                                    <div className="d-flex align-items-center" style={{ padding: "2%" }}>

                                        <div className="ml-3 w-100">
                                            <h3 className="mb-0 mt-0" style={{ marginTop: "0px" }}>{item.title}</h3>
                                            <h5 className="" style={{ marginTop: "15px" }}>Ingredients</h5>
                                            <div className="">
                                                {

                                                    item.ingredients.map((ingredient, index) => {
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

                                                    item.steps.map((instruction, index) => {
                                                        if (!instruction) return
                                                        return (
                                                            <p className="instructions" key={instruction + index}>{index}. {instruction}</p>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <div className="button mt-2 d-flex flex-row align-items-center" style={{ marginLeft: "25px" }} >
                                                <button className="btn btn-danger" onClick={() => deleteContact(item._id)}><i className="fa fa-trash fa-2x"></i></button>
                                                <button className="btn btn-success" style={{ marginLeft: "15px" }}><Link to={"/updaterecipe/" + item._id} style={{ textDecoration: "none" }}><i className="fa fa-pencil fa-2x" style={{ color: "white" }}></i></Link> </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }
        </div>
    )
}