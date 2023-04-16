import React, { useState } from 'react';
// import Image from './Image';
// import logo from '../logos/logo_no_text.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWallet, faCartShopping, faUser, faCircle } from  '@fortawesome/free-solid-svg-icons';
// import { faCircle } from  '@fortawesome/free-regular-svg-icons';
// import Cart from './Cart';
// import UserDropdown from './UserDropdown';
import '../styles/Header.css';

const Header = props => {
  const [showCart, setShowCart] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    navigate('/');
  };

  // handles when user clicks cart
  const handleClick = () => {
    showCart ? setShowCart(false) : setShowCart(true);
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
        <h2>KH</h2>
      </div>
      <div className="header-right">
        
      </div>
    </div>
  );
};

export default Header;