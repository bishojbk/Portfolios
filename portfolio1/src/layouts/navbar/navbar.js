import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-section container">
      <div className="row align-items-center">
        <h2 className="col-lg-4">EJR</h2>
        <div className="col-lg-8 d-flex justify-content-between align-items-center">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>

          <div className="navbar-section_links">
            <a
              href="https://www.linkedin.com/in/bisoj-b-594432132/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icons" icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icons" icon={faSquareFacebook} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icons" icon={faInstagram} />{" "}
            </a>
          </div>

          <button>Let &apos;s Connect</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
