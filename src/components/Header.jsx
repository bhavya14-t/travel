import React from 'react';
import { FaGlobe, FaEllipsisV } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <>
    <header className='header-container'>
        <div className='header-left'>
            <h1 className='header-logo'>Rexby</h1>
        </div>
        <div className='header-right'>
            <button className='header-login-button'>Log in </button>
            <FaGlobe className='header-icon' />
            <FaEllipsisV className='header-icon-header-menu-icon' />
        </div>
    </header>
      <hr className='header-bottom-line'/>
    </>
  );
};

export default Header;
