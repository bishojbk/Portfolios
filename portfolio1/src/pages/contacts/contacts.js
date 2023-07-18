import React from "react";

import { useState } from "react";

import Contact from "../../assets/img/contact-img.svg";

import "./contacts.styles.scss";

const Contacts = () => {
  const [name, setFirstName] = useState("");
  const [Lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setPhone("");
  //   setMessage("");
  // };

  return (
    <section id="contact">
      <div className="contacts-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={Contact} alt="contact"></img>
            </div>
            <div className="col-lg-6 col-sm-4 contact-form">
              <h3>GET IN TOUCH</h3>
              <form action="https://formspree.io/f/mrgwbbdq" method="POST">
                <input
                  type="text"
                  value={name}
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={Lname}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  type="tel"
                  placeholder="Phone no."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  cols="54"
                  placeholder="Enter your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type="submit">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
