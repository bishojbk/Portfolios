import React from "react";

import JS from "../../assets/img/JS.png";
import CSS from "../../assets/img/CSS.png";
import HTML from "../../assets/img/HTML.png";
import SASS from "../../assets/img/sass.png";
import NODE from "../../assets/img/node.png";
import REACT from "../../assets/img/React.png";
import GITHUB from "../../assets/img/github.png";

import "./skills.styles.scss";

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="container">
        <div className="skills-section_carousel-section">
          <div className="row">
            <div className="col-lg-1 left">
              <h3 className="skills">Skills</h3>
              {/* <hr className="line" /> */}
            </div>
            <div className="col-lg-11 right">
              <h4>What I Do</h4>
              <p>
                I am an Electronics, Communication and Information Engineer
                currently living in Lalitpur and having great enthusiasm in
                Front End Development.
              </p>
              <div className="carousel">
                <div className="carousel_images">
                  <img src={HTML} alt="github"></img>
                  <div className="name">HTML</div>
                </div>

                <div className="carousel_images">
                  <img src={CSS} alt="github"></img>
                  <div>CSS</div>
                </div>

                <div className="carousel_images">
                  <img src={JS} alt="github"></img>
                  <div>JAVASCRIPT</div>
                </div>

                <div className="carousel_images">
                  <img src={REACT} alt="github"></img>
                  <div>REACT JS</div>
                </div>

                <div className="carousel_images">
                  <img src={SASS} alt="github"></img>
                  <div>SASS</div>
                </div>

                <div className="carousel_images">
                  <img src={GITHUB} alt="github"></img>
                  <div>GITHUB</div>
                </div>

                <div className="carousel_images">
                  <img src={NODE} alt="github"></img>
                  <div>NODE JS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
