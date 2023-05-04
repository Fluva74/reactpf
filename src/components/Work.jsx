import React from "react";
import "./work.css";

function Work() {
  return (
    <div className="workContainer" id="workContainer">
      <div className="cardContainer">
        <div className="workCard">
          <a href="https://skytopstrategies.com/" target="blank">
            <div className="cardTop">
              <img src="./src/assets/skytop.png" alt="skytop strategies" />
            </div>
            <div className="cardBottom">
              <h3 className="project">Skytop Strategies</h3>
            </div>
          </a>
        </div>
        <div className="workCard">
          <a href="https://manifestblogs.com/" target="blank">
            <div className="cardTop">
              <img src="./src/assets/blogs.png" alt="" />
            </div>
            <div className="cardBottom">
              <h3 className="project">Manifest Blog</h3>
            </div>
          </a>
        </div>
        <div className="workCard">
          <a href="https://snowmobilecovers.com/" target="blank">
            <div className="cardTop">
              <img src="./src/assets/snow.png" alt="" />
            </div>
            <div className="cardBottom">
              <h3 className="project">Snowmobile Covers</h3>
            </div>
          </a>
        </div>
        <div className="workCard">
          <a href="https://utvcovers.com/" target="blank">
            <div className="cardTop">
              <img src="./src/assets/utv.png" alt="" />
            </div>
            <div className="cardBottom">
              <h3 className="project">UTV Covers</h3>
            </div>
          </a>
        </div>
        <div className="workCard">
          <a href="http://manifesthelpinghands.com/" target="blank">
            <div className="cardTop">
              <img src="./src/assets/hands.png" alt="" />
            </div>
            <div className="cardBottom">
              <h3 className="project">Helping Hands</h3>
            </div>
          </a>
        </div>
        
      </div>
      <hr id="aboutLink" />
    </div>
  );
}

export default Work;
