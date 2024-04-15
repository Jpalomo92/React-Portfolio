import React from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Content = ({ section }) => {
  return (
    <main>
      {section === 'AboutMe' && <AboutMe />}
      {section === 'Portfolio' && <Portfolio />}
      {section === 'Contact' && <Contact />}
      {section === 'Resume' && <Resume />}
    </main>
  );
};

export default Content;