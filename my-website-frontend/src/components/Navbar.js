import React, { useEffect } from 'react';
import './Navbar.css'; // Add your CSS file if you have one
import bannerImage from '../images/japanBanner.jpg'; // Import the image

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
    
        if (top >= offset && top < offset + height) {
          const currentActive = document.querySelector('.navbar-item a.active');
          if (currentActive) {
            currentActive.classList.remove('active');
          }
          const newActive = document.querySelector(`.navbar-item a[href="#${id}"]`);
          if (newActive) {
            newActive.classList.add('active');
          }
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-item">
            <a href="/projects">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <img className="bannerImage" src={bannerImage} alt="Banner" />
    </div>
  );
}

export default Navbar;
