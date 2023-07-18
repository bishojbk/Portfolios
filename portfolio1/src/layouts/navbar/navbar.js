import React from "react";

import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="container">
        <div className="row align-items-center">
          <h2 className="col col-sm-3">BISOJ</h2>
          <div className="col d-flex justify-content-between align-items-center">
            <nav className="d-flex justify-content-between">
              <li>
                <Link to="home">Home</Link>
              </li>
              <li>
                <Link to="skills" duration={1000}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects">Projects</Link>
              </li>
            </nav>

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

            <Link to="contact">
              <button>Let &apos;s Connect</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
