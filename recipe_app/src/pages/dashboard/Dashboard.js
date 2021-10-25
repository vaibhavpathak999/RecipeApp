import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
// import Profile from './Profile';
import "./../css/dashboard.css"

const Dashboard = () => {

    const [data, setData] = useState([])
    const { state, dispatch } = useContext(UserContext)
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

    const deleteContact = (postid) => {
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
        <div>
            {/* <Profile /> */}
            <div className="home container" style={{padding:"0.5% 10%", margin:"0px", display:"flex", flexDirection:"row",flexWrap:"wrap"}} >
                {

                    data.map((item,index) => {
                        return (
                            <div key={index + data.title} className="container mt-5 d-flex justify-content-center" >
                                <div className="card p-3" style={{ width: 500 }}>
                                <img className="recipeImage" src={item.photo} /> 
                                    <div className="d-flex align-items-center" style={{ padding: "2%" }}>
                                        
                                        <div className="ml-3 w-100">
                                            <h3 className="mb-0 mt-0" style={{ marginTop: "0px" }}>{item.title}</h3>
                                            <h5 className="" style={{ marginTop: "15px" }}>Ingredients</h5>
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

                                            <h5 className="" style={{ marginTop: "15px" }}>Instructions</h5>
                                            <div className="">
                                            {
                                                
                                                item.steps.map((instruction,index) =>{
                                                    if(!instruction) return
                                                    return (
                                                        <p className="instructions" key={instruction+index}>{index}. {instruction}</p>
                                                    )
                                                } )
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
        </div>
    )
}



export default Dashboard