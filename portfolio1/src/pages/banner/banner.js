import React from "react";

import { Link } from "react-scroll";
import { ReactComponent as HeaderImg } from "../../assets/img/header-img.svg";

import "./banner.styles.scss";

const Banner = () => {
  return (
    <section id="home">
      <div className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h5>Welcome to my Portfolio</h5>
              <h1>Hi! I am Bisoj, A WEB DESIGNER</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button>
                <Link to="contact">
                  <p>Let&apos;s Connect</p>
                </Link>
              </button>
            </div>
            <div className="col-lg-5">
              <HeaderImg className="headerimage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
