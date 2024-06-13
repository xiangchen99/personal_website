import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css"; // Your CSS file
import { Element } from "react-scroll";

const projectData = [
  {
    title: "RoboDog",
    description: "A machine learning model that reacts to user gestures and commands. 2000 Datasets were",
    imageUrl: "placeholder-image.jpg",
    projectUrl: "https://www.yourproject.com",
  },
  {
    title: "Placeholder Project 2",
    description: "Another short description of your cool project.",
    imageUrl: "placeholder-image2.jpg",
    projectUrl: "https://www.yoursecondproject.com",
  },
  {
    title: "Placeholder Project 3",
    description: "A third short description of your amazing project.",
    imageUrl: "placeholder-image3.jpg",
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
