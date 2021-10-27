import React from 'react';
import firstImage from "../../images/Visual Tool.png";
import secondImage from "../../images/Share.png";
import thirdImage from "../../images/recipes.png";
import "../css/feature.css";

function Features() {
    return (
        <div className="container-fluid main-page-features" style={{ padding: "1% 15% 0% 10%", margin: "7% 0%" }}>
            <div style={{ backgroundColor: "#fff" }}>
                <h1 className="features-heading" style={{padding:"0px 30px 50px auto"}}>Features</h1>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="featureCard">
                                <div className="card-image">
                                    <img src={firstImage}></img>
                                    <span className ="card-title" style={{padding:"90px"}}>Visualization</span>
                                </div>
                                <div className="card-content">
                                    <p><b>So that you can focus on writing your recipes not memozing them.</b></p>
                                    <p>One card is for filling the details for the recipe.</p>
                                    <p>Second card is for seeing all the changes live.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m7">
                            <div className="featureCard">
                                <div className="card-image">
                                    <img src={thirdImage}></img>
                                    <span className ="card-title" style={{color:"black"}}>UI/UX</span>
                                </div>
                                <div className="card-content">
                                    <p><b>Easy to use User Centered desing for app.</b></p>
                                    <p> This web uses simple form filling for creating, updating the recipes.</p>
                                    <p> You will fall in love the design.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col s12 m7">
                            <div className="featureCard">
                                <div className="card-image">
                                    <img src={secondImage}></img>
                                    <span className ="card-title">Options</span>
                                </div>
                                <div className="card-content">
                                    <p><b>You can easily share your amazing recipe to your frinds and family.</b></p>
                                    <p> User can share recipes.</p>
                                    <p> User can update recipes.</p>
                                    <p> User can delete recipes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features
