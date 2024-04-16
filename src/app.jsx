import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';



function App() {
  const [selectedSection, setSlectedSection] = useState('AboutMe');

  return (
    <div>
      <Header />
      <Navbar section={selectedSection} setSection={setSlectedSection} />
      <div className="content">
        {selectedSection === 'AboutMe' && <AboutMe />}
        {selectedSection === 'Portfolio' && <Portfolio />}
        {selectedSection === 'Contact' && <Contact />}
        {selectedSection === 'Resume' && <Resume />}
      </div>
      <Footer />
    </div>
  );
}

export default App;