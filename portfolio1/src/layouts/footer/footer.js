import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h2>BISOJ</h2>
          <div>
            <div className="footer-section_links">
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
          </div>
        </div>
        <p>Copyright 2023. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
