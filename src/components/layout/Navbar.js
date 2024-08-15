import React from 'react';
import "./navbar.css"
import {  Link } from "react-router-dom";

const navbar= () =>{
  return (
  <div className='sub-header'>
    <div className="sub-header-title" style={{ fontSize: '22px' }}>Doctor of the Month</div>
    <div>
      <ul className="sub-header-tabs">
        <li className="sub-header-tab active">
          <Link to="/" style={{textDecoration:"none", color: "#3299db"}}>Doctor of the Month</Link>
        </li>
        <li className="sub-header-tab">
          <Link to="/PreviousDoc" style={{textDecoration:"none", color: "#3299db"}}>Previous Doctors</Link>
        </li>
        <li className="sub-header-tab"> 
          <Link to="/Newsletter" style={{textDecoration:"none", color: "#3299db"}}>Join Newsletter</Link>
        </li>
        <li className="sub-header-tab">
          <Link to="/Contact" style={{textDecoration:"none", color: "#3299db"}}>About/Contact</Link>
        </li>
      </ul>
    </div>
  </div>
  );
}

// function SubHeader() {
//   return (
//     <div className="sub-header">
//       <div className="sub-header-title" style={{ fontSize: '22px' }}>Doctor of the Month</div>
//       <div className="sub-header-tabs">
//         <a href="https://sites.google.com/view/doctornetwork1/doctor-of-the-month" className="sub-header-tab active">Doctor of the Month</a>
//         <a href="https://sites.google.com/view/doctornetwork1/previous-doctors" className="sub-header-tab">Previous Doctors</a>
//         <a href="https://sites.google.com/view/doctornetwork1/join-newsletter" className="sub-header-tab">Join Newsletter</a>
//         <a href="https://sites.google.com/view/doctornetwork1/aboutcontact" className="sub-header-tab">About/Contact</a>
//       </div>
//     </div>
//   );
// }

export default navbar;
