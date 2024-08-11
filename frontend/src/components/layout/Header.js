import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/stethoscope.png" alt="Logo" />
      </div>
      <div className="header-title">
        Doctor Network
      </div>
    </div>
  );
}

export default Header;
