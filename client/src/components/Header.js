import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from  '@fortawesome/free-regular-svg-icons';
import Image from './Image';
import PDF from '../media/resume/KeenanHellerResume.pdf';
import logoLight from '../media/logo/light.svg';
import logoDark from '../media/logo/logo_dark_mode.svg';
import { ThemeContext } from '../App';
import '../styles/Header.css';

const Header = props => {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);

  // handles when user clicks different header options
  const handleClick = (id) => {
    switch (id) {
      case 'home':
        navigate('/'); // navigates to home page
        break;

      case 'about':
        navigate('/about'); // navigates to about page
        break;

      case 'projects':
        navigate('/projects'); // navigates to project page
        break;

      case 'resume':
        window.open(PDF, '_blank'); // navigates to resume page
        break;

      case 'contact':
        navigate('/contact'); // navigates to contact page
        break;

      default:
        break; // handles invalid route
    };
  };

  return (
      <div className='header-container'>
        <div className='header-left'>
          <Image className='header-logo' id='home' onClick={(e => handleClick(e.target.id))} src={theme === 'light' ? logoLight : logoDark} />
        </div>
        <ul className="header-right">
          <h3 className='header-item' id='about' onClick={(e => handleClick(e.target.id))}>About</h3>
          <h3 className='header-item' id='projects' onClick={(e => handleClick(e.target.id))}>Projects</h3>
          <h3 className='header-item' id='resume' onClick={(e => handleClick(e.target.id))}>Resume</h3>
          <FontAwesomeIcon className='header-icon header-item' id='mode' icon={faCircle} onClick={props.toggleTheme} />
        </ul>
      </div>
  );
};

export default Header;
