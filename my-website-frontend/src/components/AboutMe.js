import React from "react";
import "./AboutMe.css"; // Your CSS file

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="your-profile-picture.jpg"
          alt="Your Profile"
          className="profile-pic"
        />
        <p>
          I'm a passionate web developer with a love for hiking!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
