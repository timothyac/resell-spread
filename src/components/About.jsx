import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div class="card">
          <div class="card-header">
            <h4>About</h4>
          </div>
          <div class="card-body">
            <h5 class="card-title">Welcome to ResellSpread</h5>
            <p class="card-text">
              ResellSpread is an open-source spreadsheet application, for
              Resellers, by Resellers. Instead of wasting time trying to find a
              good excel/google spreadsheet setup, just input your information
              on here and get it done. This project was done entirely in{" "}
              <a href="https://reactjs.org/">React JS</a> for the front-end, and
              uses this{" "}
              <a href="https://github.com/mars/create-react-app-buildpack">
                buildpack
              </a>{" "}
              [on Heroku] as the back-end. The source code for this project can
              be found below. Feel free to use any of my code, and also feel
              free to contact me on Twitter or Discord if you have any problems
              or questions!
            </p>
            <a
              href="https://github.com/SunstroUS/ResellSpread"
              class="btn btn-primary"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
