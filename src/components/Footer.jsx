import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <section>
      <footer>
        <ul className='footer-container'>
          <li>
            <a href="mailto:Jpalomo92@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Jpalomo92" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/julianipalomo/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;