import React from "react";
import "./ContactMe.css";

function ContactMe() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactMe;
