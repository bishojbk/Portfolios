import React from "react";

import Contact from "../../assets/img/contact-img.svg";

import "./contacts.styles.scss";

const Contacts = () => {
  return (
    <div className="contacts-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={Contact} alt="contact"></img>
          </div>
          <div className="col-lg-6 col-sm-4 contact-form">
            <h3>GET IN TOUCH</h3>
            <form>
              <input type="text" placeholder="First Name"></input>
              <input type="text" placeholder="Last Name"></input>
              <input type="email" placeholder="Your Email"></input>
              <input type="tel" placeholder="Phone no."></input>

              <textarea
                id="message"
                name="message"
                rows="7"
                cols="54"
                placeholder="Enter your message here"
              ></textarea>

              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
