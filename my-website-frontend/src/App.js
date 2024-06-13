import { Link} from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Secrets from "./components/Secret";
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <div>
        <Navbar />
        <div id="aboutMe">
          <AboutMe />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contactMe">
          <ContactMe />
        </div>
        <div id="secrets">
          <Secrets />
          </div>
      </div>
    </div>
  );
}

export default App;