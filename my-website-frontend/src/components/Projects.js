import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css"; // Your CSS file
import { Element } from "react-scroll";
import diabetesLogo from "./pictures/diabetesLogo.png";
import robodogLogo from "./pictures/robodogLogo.png";
import sportsPredictor from "./pictures/sportsPredictor.png";

const projectData = [
  {
    title: "RoboDog",
    description: "A machine learning model that reacts to user gestures and commands. 2000 Datasets were",
    imageUrl: robodogLogo,
    projectUrl: "https://github.com/xiangchen99/RoboDog",
  },
  {
    title: "Comprehensive Diabetes Prediction System",
    description: "Harnessing machine learning, we were able to classify a large dataset of patients to predict onset diabetes, an important factor "
     + "in the healthcare industry. The model was trained on a dataset of 100,000 patients and achieved an accuracy of 91%.",
    imageUrl: diabetesLogo,
    projectUrl: "https://github.com/xiangchen99/Diabetes-Classifier",
  },
  {
    title: "Placeholder Project 3",
    description: "A third short description of your amazing project.",
    imageUrl: sportsPredictor,
    projectUrl: "https://www.yourthirdproject.com",
  },
];

function Projects() {
  return (
    <Element name="projects">
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        {projectData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
    </Element>
  );
}

export default Projects;
