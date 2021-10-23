import React, { Component } from 'react';
import MainImage from "../images/2.png";
import "./css/home.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid main-page" style={{ padding: "1% 15% 0% 10%" }}>
        <div className="home-container">
          <div className="row align-items-center">
            <div className="text-content col-sm-12 col-md-6">
              <h1><span style={{ color: "#F89A99" }}>MyRecipe Diary</span><br /> is your new digital recipe diary.</h1>
              <h4 style={{ color: "#595959" }}>Never loose your recipe again.</h4>
              <h4 style={{ color: "#595959" }}>Share you recipe with all your family</h4>
            </div>

            <div className="image-content col-sm-12 col-md-6">
              <img src={MainImage} href="" alt="foodplate image" />
            </div>
          </div>

          <div className="Copyright-section">
            <p>
              © Copyright All Rights Reserved
              <br />
              Designed by <span style={{ color: "#F89A99" }}>Vaibhav Pathak</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}