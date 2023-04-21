import React, { useContext } from 'react';
import Image from './Image';
import me from '../media/travel/spain_me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Landing.css';
import { ThemeContext } from '../App';

// component for website home
const Landing = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className='landing-container'>
      <Image className='landing-image' src={me} />
      <div className='landing-body'>
        <h1 className={`landing-name-${theme}`}>Keenan Heller</h1>
        <h3 className={`landing-description-${theme}`}>Full Stack Developer @ Boeing</h3>
        <div className='landing-icons'>
          <a href='https://github.com/kheller18' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <FontAwesomeIcon className={`landing-icon-${theme}`} id='github' icon={faGithub} />
          </a>
          <a href='https://www.linkedin.com/in/keenanheller/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
            <FontAwesomeIcon className={`landing-icon-${theme}`} id='linkedin' icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
