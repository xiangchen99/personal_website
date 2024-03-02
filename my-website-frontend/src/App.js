import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
    </div>
  );
}

export default App;
