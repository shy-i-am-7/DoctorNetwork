import React from 'react';
import './footer.css';

function Footer({ isPhysician }) {
  return (
    <div className={`footer ${isPhysician ? 'physician-theme' : 'resident-theme'}`}>
      <div className="header-logo">
        <img 
          src="https://img.icons8.com/ios-filled/50/ffffff/stethoscope.png" 
          alt="Logo" 
          style={{ width: '25px', height: '25px' }} 
        />
      </div>
      <div className="header-title" style={{ fontSize: '10px' }}>
        PhysiLink<br />
        Website created with the help of Naveen Chithan and Kishore Balakrishnan.
      </div>
    </div>
  );
}

export default Footer;