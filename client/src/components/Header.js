import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from  '@fortawesome/free-regular-svg-icons';
import PDF from '../media/resume/KeenanHellerResume.pdf';
import '../styles/Header.css';

const Header = props => {
  const navigate = useNavigate();

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
        <h1 className='header-name' id='home' onClick={(e => handleClick(e.target.id))}>KH</h1>
      </div>
      <ul className="header-right">
        <li className='header-item' id='about' onClick={(e => handleClick(e.target.id))}>About</li>
        <li className='header-item' id='projects' onClick={(e => handleClick(e.target.id))}>Projects</li>
        <li className='header-item' id='resume' onClick={(e => handleClick(e.target.id))}>Resume</li>
        <li className='header-item' id='contact' onClick={(e => handleClick(e.target.id))}>Contact</li>
        <FontAwesomeIcon className='header-icon header-item' id='mode' icon={faCircle} onClick={props.toggleTheme} />
      </ul>
    </div>
  );
};

export default Header;
