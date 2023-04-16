import React, { useState } from 'react';
// import Image from './Image';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from  '@fortawesome/free-regular-svg-icons';
import '../styles/Header.css';

const Header = props => {
  const [showCart, setShowCart] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    navigate('/');
  };

  // handles when user clicks cart
  const handleClick = (id) => {
    showCart ? setShowCart(false) : setShowCart(true);
    switch (id) {
      case 'about':
        navigate('/about');
        break;
      
      case 'projects':
        navigate('/projects');
        break;
      
      default:
        break;
    }

  };

  // handles when user clicks wallet
  const handleWalletClick = async () => {
    // const address = await getUserAddress();
    // props.setWalletAddress(address);
  };

  // handles when user clicks icon
  const handleUserClick = () => {
    showUser ? setShowUser(false) : setShowUser(true);
  };

  return (
    <div className='header-container'>
      <div className='header-left'>
        <h1 className='header-name'>KH</h1>
      </div>
      <ul className="header-right">
        <li className='header-item' id='about' onClick={(e => handleClick(e.target.id))}>About</li>
        <li className='header-item' id='projects' onClick={(e => handleClick(e.target.id))}>Projects</li>
        <li className='header-item' id='resume'>Resume</li>
        <FontAwesomeIcon className='header-icon header-item' id='' icon={faCircle} onClick={props.toggleTheme} />

      </ul>
    </div>
  );
};

export default Header;
