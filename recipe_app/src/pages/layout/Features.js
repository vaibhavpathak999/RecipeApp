import React from 'react';
import firstImage from "../../images/2.png";
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
                                    <span className ="card-title">Live Recipe Visualization</span>
                                </div>
                                <div className="card-content">
                                    <p>So that you can focus on writing your recipes not memozing them.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m7">
                            <div className="featureCard">
                                <div className="card-image">
                                    <img src={firstImage}></img>
                                    <span className ="card-title" style={{color:"black"}}>Interactive UI/UX</span>
                                </div>
                                <div className="card-content">
                                    <p>Easy to use User Centered desing for app. You will fall in love the design.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col s12 m7">
                            <div className="featureCard">
                                <div className="card-image">
                                    <img src={firstImage}></img>
                                    <span className ="card-title">Recipe Share Option</span>
                                </div>
                                <div className="card-content">
                                    <p>You can easily share your amazing recipe to your frinds and family.</p>
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
