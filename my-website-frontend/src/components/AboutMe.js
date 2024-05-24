import React from "react";
import "./AboutMe.css"; // Your CSS file
import PFP from "../images/xiangPFP.jpeg"; // Import the image
import { Box, Container, TableContainer, Typography } from "@mui/material";

function AboutMe() {
  return (
    <Container id="about" className="about-section">
      <Typography variant="h2">About Me</Typography>
      <Box className="about-content" sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: "space-between"}}>
      <Box sx={{ 
          width: { xs: "100%", md: "300%" }, // Adjust the width of the image
          mb: { xs: 2, md: 0 }, // Add bottom margin on small screens
        }}>
          <img className="profile-pic" src={PFP} alt="Your Profile" style={{width: "100%", height: "auto"}}/>
        </Box>
        <Typography>
          Hello my name is Xiang! I am a software developer with a passion for
          machine learning and big data, and I am currently looking for an
          internship in software engineering. I have experience in Data Science,
          Machine Learning, and Full Stack Web Development. I am proficient in
          Python, Java, JavaScript, and SQL. I have experience with libraries
          such as TensorFlow, Keras, Pandas, NumPy, and Scikit-learn. I have
          also worked with frameworks such as React, Node.js, and Express.js. I
          am a quick learner and I am always looking to expand my skill set.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutMe;
