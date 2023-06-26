import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="row">
        <h2 className="col-lg-4">LOGO</h2>
        <div className="col-lg-8 d-flex justify-content-between align-items-center">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>

          <div className="navbar-section_links">
            <FontAwesomeIcon className="icons" icon={faLinkedin} />
            <FontAwesomeIcon className="icons" icon={faSquareFacebook} />
            <FontAwesomeIcon className="icons" icon={faInstagram} />
          </div>

          <button>Let &apos;s Connect</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
