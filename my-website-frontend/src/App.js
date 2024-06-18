import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Secret from './components/Secret';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <div id="aboutMe">
                <AboutMe />
              </div>
              <div id="projects">
                <Projects />
              </div>
              <div id="contactMe">
                <ContactMe />
              </div>
            </div>
          } />
          <Route path="/secret" element={<Secret />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
