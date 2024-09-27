import React from 'react';
import './header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/stethoscope.png" alt="Logo" />
      </div>
      <div className="header-title">
        FutureDoc Network
      </div>
    </div>
  );
}


export default Header;
