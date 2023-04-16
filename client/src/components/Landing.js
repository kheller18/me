import React from 'react';
import Image from './Image';
import me from '../media/travel/spain_me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from  '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Landing.css';

const Landing = () => {

  return (
    <div className='landing-container'>
      {/* <FontAwesomeIcon className='landing-image-container' icon={faCircle}> */}
        <Image className='landing-image' src={me} />
      {/* </FontAwesomeIcon> */}
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
