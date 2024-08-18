import React from 'react';
import { useState } from 'react';
import "./navbar.css";
import {  NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
  

const Navbarcomp= () =>{
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const getBrandName = () => {
    switch (location.pathname) {
      case '/':
        return 'Doctor of the Month';
      case '/PreviousDoc':
        return 'Previous Doctors';
      case '/Newsletter':
        return 'Join Newsletter';
      case '/Contact':
        return 'About/Contact';
      default:
        return 'Doctor of the Month';
    }
  };

  return (
  <Navbar expand="lg" expanded={expanded} className='sub-header'>
    {/* <Container> */}
      <Navbar.Brand style={{ fontSize: '22px' }}>{getBrandName()}</Navbar.Brand>
      <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")} 
        />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <NavLink
          exact
          activeClassName="sub-header-tab active"
          className="sub-header-tab"
          to="/"
          onClick={() => setExpanded(false)}
        >
          Doctor of the Month
        </NavLink>
        <NavLink
          activeClassName="sub-header-tab active"
          className="sub-header-tab"
          to="/PreviousDoc"
          onClick={() => setExpanded(false)}
        >
          Previous Doctors
        </NavLink>
        <NavLink
          activeClassName="sub-header-tab active"
          className="sub-header-tab"
          to="/Newsletter"
          onClick={() => setExpanded(false)}
        >
          Join Newsletter
        </NavLink>
        <NavLink
          activeClassName="sub-header-tab active"
          className="sub-header-tab"
          to="/Contact"
          onClick={() => setExpanded(false)}
        >
          About/Contact
        </NavLink>
      </Nav>
      </Navbar.Collapse>
    {/* </Container> */}
  </Navbar>
  );
}


// <ul className="sub-header-tabs">
//         <li className="sub-header-tab active">
//           <Link to="/" style={{textDecoration:"none", color: "#3299db"}}>Doctor of the Month</Link>
//         </li>
//         <li className="sub-header-tab">
//           <Link to="/PreviousDoc" style={{textDecoration:"none", color: "#3299db"}}>Previous Doctors</Link>
//         </li>
//         <li className="sub-header-tab"> 
//           <Link to="/Newsletter" style={{textDecoration:"none", color: "#3299db"}}>Join Newsletter</Link>
//         </li>
//         <li className="sub-header-tab">
//           <Link to="/Contact" style={{textDecoration:"none", color: "#3299db"}}>About/Contact</Link>
//         </li>
//       </ul>

//}

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

export default Navbarcomp;
