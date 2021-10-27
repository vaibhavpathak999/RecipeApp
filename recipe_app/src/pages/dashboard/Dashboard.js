import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import "./../css/dashboard.css"

import FadeLoader from "react-spinners/FadeLoader";
import override from './utility';

const Dashboard = () => {

    const [data, setData] = useState([])
    const { state, dispatch } = useContext(UserContext)
    let [color, setColor] = useState("#F46E45");
    useEffect(() => {
        fetch('/myrecipes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                // console.log(result)
                // console.log(result.contact[0].contact_username)
                setData(result.recipe)
            })
    }, [])

    const deleteRecipe = (postid) => {
        // console.log(postid)
        fetch(`/deleterecipe/${postid}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                const newData = data.filter(item => {
                    return item._id !== result._id
                })
                setData(newData)
            })
    }
    return (
        <div style={{backgroundColor:"#e0e0e0"}}>
            <div className="home container" style={{padding:"4%", marginBottom:"0px", display:"flex", flexDirection:"row", flex:"1 1 auto"}} >
                {
                    data === [] ? <FadeLoader color={color} css={override} size={150} /> : data.map((item,index) => {
                        return (
                            <div key={index + data.title} className="container mt-5 d-flex justify-content-center" >
                                <div className="card recipe-cards p-3">
                                <img className="recipeImage" src={item.photo} /> 
                                    <div className="d-flex align-items-center" style={{ padding: "2%" }}>
                                        
                                        <div className="ml-3 w-100">
                                            <h3 className="mb-0 mt-0" style={{ margin: "40px 0px 40px 0px" }}>{item.title}</h3>
                                            <h5 className="" style={{ padding: "25px 0px 0px 0px", color:"#4D4D4D" }}>Ingredients</h5>
                                            <div className="">
                                            {
                                                
                                                item.ingredients.map((ingredient,index) =>{
                                                    if(!ingredient) return
                                                    return (
                                                        <span className="ingredients" key={ingredient+index}>{ingredient}</span>
                                                    )
                                                } )
                                            }
                                            </div>

                                            <h5 className="" style={{ marginTop: "25px", color:"#4D4D4D" }}>Instructions</h5>
                                            <div className="" >
                                            {
                                                
                                                item.steps.map((instruction,index) =>{
                                                    if(!instruction) return
                                                    return (
                                                        <p className="instructions" key={instruction+index}>{index}. {instruction}</p>
                                                    )
                                                } )
                                            }
                                            </div>
                                            
                                            <div className="button mt-2 d-flex flex-row align-items-center" style={{ margin: "45px auto auto 0px", padding:"10px 0px" }} >
                                                <button className="btn btn-success" style={{ margin: "5px 15px",width:"90%" }}><Link to={"/recipes/" + item._id} style={{ textDecoration: "none", color:"white" }}>Share</Link> </button>
                                                <button className="btn btn-primary" style={{ margin: "5px 15px",width:"90%" }}><Link to={"/updaterecipe/" + item._id} style={{ textDecoration: "none", color:"white" }}>Update</Link> </button>
                                                <button className="btn btn-danger" onClick={() => deleteRecipe(item._id)} style={{width:"90%", margin:"5px 15px"}}><Link to="/myrecipes" style={{ textDecoration: "none", color:"black" }}>Delete</Link> </button>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}



export default Dashboard