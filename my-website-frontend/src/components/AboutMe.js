import React from "react";
import "./AboutMe.css"; // Your CSS file

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src={process.env.PUBLIC_URL + "/logo192.png"}
          alt="Your Profile"
          className="profile-pic"
        />
        <p>
          Hello my name is Xiang! I am a software developer with a passion for machine learning and big data, and I am currently looking for an internship in software engineering.
          I have experience in Data Science, Machine Learning, and Full Stack Web Development. I am proficient in Python, Java, JavaScript, and SQL. I have experience with libraries such as TensorFlow, Keras, Pandas, NumPy, and Scikit-learn. I have also worked with frameworks such as React, Node.js, and Express.js. I am a quick learner and I am always looking to expand my skill set.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
