import React from 'react';
import Image from './Image';
import me from '../media/travel/spain_me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Landing.css';

// component for website home
const Landing = () => {

  return (
    <div className='landing-container'>
      <Image className='landing-image' src={me} />
      <div className='landing-body'>
        <h1 className='landing-name'>Keenan Heller</h1>
        <p className='landing-name'>Full Stack Developer @ Boeing</p>
        <div className='landing-icons'>
          <FontAwesomeIcon className='landing-icon' id='github' icon={faGithub} />
          <FontAwesomeIcon className='landing-icon' id='linkedin' icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
