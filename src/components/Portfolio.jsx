import React from 'react';
import '../styles/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
    return (
        <section>
            <h2 className='portfolio'>Portfolio</h2>
            <section className='project-container'>
                <div className='project'>
                    <img src="" alt="" className='project-image' />
                    <div className='card-overlay'>
                        <a href='https://efren96.github.io/movies-to-watch-app/'>
                            <h3>MovieGo!</h3>
                        </a>
                        <a href="https://github.com/Efren96/movies-to-watch-app" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
              
                        </a>
                    </div>
                </div>
            </section>
        </section>
    );
};