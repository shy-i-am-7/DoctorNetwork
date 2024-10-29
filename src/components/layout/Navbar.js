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
    <div className='container-fluid'>
      <Navbar.Brand className=''>{getBrandName()}</Navbar.Brand>
      <Navbar.Toggle className='ms-auto'
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
          to="https://www.youtube.com/@PhysiLink"
          target="_blank"
          rel="noreferrer"
          onClick={() => setExpanded(false)}
        >
          Webinars
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
      </div>
    {/* </Container> */}
  </Navbar>
  );
}

export default Navbarcomp;
