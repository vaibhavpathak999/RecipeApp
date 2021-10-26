import React, { Component } from 'react';
import MainImage from "../images/2.png";
import "./css/home.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Features from './layout/Features';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid main-page" style={{ padding: "1% 15% 0% 10%" }}>
          <div className="home-container">
            <div className="row align-items-center">
              <div className="text-content col-sm-12 col-md-6">
                <h1><span style={{ color: "#F46E45", fontSize: "5rem" }}>MyRecipe Diary</span><br /> is your new digital recipe diary.</h1>
              </div>

              <div className="image-content col-sm-12 col-md-6">
                <img src={MainImage} href="" alt="foodplate image" />
              </div>
            </div>
          </div>
        </div>
        
          <Features />
      </div>
    )
  }
}