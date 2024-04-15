import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';



function App() {
  const [section, setSection] = useState('AboutMe');

  return (
    <div>
      <Header />
      <Navbar section={section} setSection={setSection} />
      <div className="content">
        {section === 'AboutMe' && <AboutMe />}
        {section === 'Portfolio' && <Portfolio />}
        {section === 'Contact' && <Contact />}
        {section === 'Resume' && <Resume />}
      </div>
      <Footer />
    </div>
  );
}

export default App;