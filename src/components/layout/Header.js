import React from 'react';
import './header.css';

function Header({ isPhysician }) {
  return (
    <div className={`header ${isPhysician ? 'physician-theme' : 'resident-theme'}`}>
      <div className="header-logo">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/stethoscope.png" alt="Logo" />
      </div>
      <div className="header-title">
        PhysiLink
        <div className="header-slogan">
          Connecting Future Physicians with Mentors
        </div>
      </div>
    </div>
  );
}

export default Header;