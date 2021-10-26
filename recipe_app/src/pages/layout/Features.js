import React from 'react';
import firstImage from "../../images/1.png";

function Features() {
    return (
        <div className="container-fluid main-page-features" style={{ padding: "1% 15% 0% 10%", margin: "7% 0%" }}>
            <div style={{ backgroundColor: "#fff" }}>
                <h1 className="features-heading">Features</h1>
                <div className="container">
                    <div class="row">
                        <div class="col s12 m7">
                            <div class="card">
                                <div class="card-image">
                                    <img src={firstImage}></img>
                                    <span class ="card-title">Card Title</span>
                                </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>

                        <div class="col s12 m7">
                            <div class="card">
                                <div class="card-image">
                                    <img src={firstImage}></img>
                                    <span class ="card-title" style={{color:"black"}}>Interactive UI/UX</span>
                                </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col s12 m7">
                            <div class="card">
                                <div class="card-image">
                                    <img src={firstImage}></img>
                                    <span class ="card-title">Card Title</span>
                                </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-sm-4">
                        <div className="text-center features-item">
                            <div className="col-wrapper">
                                <div className="icon-border">
                                    <i class="fa fa-paint-brush fa-3x color-l-blue"></i>
                                </div>
                                <h5>Interactive UI/UX</h5>
                                <p>A simple and easy to use application according to the interests of the users.</p>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="col-sm-4">
                        <div className="text-center features-item">
                            <div className="col-wrapper">
                                <div className="icon-border">
                                    <i class="fa fa-trash fa-3x color-l-yellow"></i>
                                </div>
                                <h5>Update & Delete</h5>
                                <p>The user can update or delete any contact he/she wishes to.</p>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Features
