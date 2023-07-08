import React from "react";

import Brandspire from "../../assets/img/Brandspire.png";
import Pizza from "../../assets/img/Pizza.png";
import Piano from "../../assets/img/Piano.png";
import WhackAMole from "../../assets/img/whackamole.png";
import Website1 from "../../assets/img/Website1.png";
import Clock from "../../assets/img/Clock.png";

import "./projects.styles.scss";

const BrandspireClicked = () => {
  window.open("https://brandspire.netlify.app/", "_blank");
};

const PianoClicked = () => {
  window.open("https://playpianoejr.netlify.app/", "_blank");
};

const Website1Clicked = () => {
  window.open("https://makeyourownmeal.netlify.app/", "_blank");
};

const ClockClicked = () => {
  window.open("https://roundclockejr.netlify.app/", "_blank");
};

const WhackAMoleClicked = () => {
  window.open("https://whackamoleejr.netlify.app/", "_blank");
};

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="container">
        <h2>PROJECTS</h2>
        <p className="mt-4">Here are some of the projects that I have done.</p>
        <div className="projects-section_box">
          <div class="column column1">Front End Projects</div>
          <div class="column column2">Back End Projects</div>
          <div class="column column3">Other Projects</div>
        </div>
        <div className="projects-section_images">
          <div className="images_wrapper">
            <span onClick={BrandspireClicked}>Brandspire</span>
            <p>Design for a company.</p>
            <img src={Brandspire} alt="" onClick={BrandspireClicked}></img>
          </div>
          <div className="images_wrapper">
            <span onClick={PianoClicked}>Piano</span>
            <p>Simple Piano</p>
            <img src={Piano} alt="" onClick={PianoClicked}></img>
          </div>
          <div className="images_wrapper">
            <span onClick={Website1Clicked}>Make Meal</span>
            <p>
              Get Recipe for your meal by entering <br /> the ingredients.
            </p>
            <img src={Website1} alt="" onClick={Website1Clicked}></img>
          </div>
          <div className="images_wrapper">
            <span onClick={WhackAMoleClicked}>WhackAMole</span>
            <p>Simple Whack A Mole Game</p>
            <img src={WhackAMole} alt="" onClick={WhackAMoleClicked}></img>
          </div>
          <div className="images_wrapper">
            <span onClick={ClockClicked}>Clock</span>
            <p>Aesthetically Pleasing Clock</p>
            <img src={Clock} alt="" onClick={ClockClicked}></img>
          </div>
          <div className="images_wrapper">
            <span>Pizza </span>
            <p>One Page Pizza Info Website</p>
            <img src={Pizza} alt=""></img>
          </div>
        </div>

        <p className="mt-4">
          If you want to see more of my projects, click on my{" "}
          <a
            href="https://github.com/bishojbk"
            target="_blank"
            rel="noreferrer"
          >
            github.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
