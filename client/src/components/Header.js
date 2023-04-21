import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from  '@fortawesome/free-regular-svg-icons';
import Image from './Image';
import PDF from '../media/resume/KeenanHellerResume.pdf';
// import logoLight from '../media/logo/logo_transparent2.svg';
// import logoLight from '../media/logo/new_light.svg';
import logoLight from '../media/logo/light.svg';
import logoDark from '../media/logo/logo_transparent_dark.svg';
import '../styles/Header.css';
import { ThemeContext } from '../App';

const Header = props => {
  const navigate = useNavigate();
  const themeContext = useContext(ThemeContext);

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
          {/* <h1 className='header-name' id='home' onClick={(e => handleClick(e.target.id))}>KH</h1> */}
          <Image className='header-logo' src={themeContext === 'dark' ? logoLight : logoDark} />
          {/* <h1 className='header-name' id='home' onClick={(e => handleClick(e.target.id))}>
          </h1> */}
        </div>
        <ul className="header-right">
          <h3 className='header-item' id='about' onClick={(e => handleClick(e.target.id))}>About</h3>
          <h3 className='header-item' id='projects' onClick={(e => handleClick(e.target.id))}>Projects</h3>
          <h3 className='header-item' id='resume' onClick={(e => handleClick(e.target.id))}>Resume</h3>
          {/* <h3 className='header-item' id='contact' onClick={(e => handleClick(e.target.id))}>Contact</h3> */}
          <FontAwesomeIcon className='header-icon header-item' id='mode' icon={faCircle} onClick={props.toggleTheme} />
        </ul>
      </div>
  );
};

export default Header;
