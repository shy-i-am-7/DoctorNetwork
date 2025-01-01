import React from 'react';
import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComp = ({ isPhysician, setIsPhysician }) => {
  const [expanded, setExpanded] = React.useState(false);
  const location = useLocation();

  const getBrandName = () => {
    switch (location.pathname) {
      case '/':
      case '/RESIDENT_OF_MONTH_ROUTE':
        return isPhysician ? 'Doctor of the Month' : 'Resident of the Month';
      case '/PreviousDoc':
      case '/PREVIOUS_RESIDENTS_ROUTE':
        return isPhysician ? 'Previous Doctors' : 'Previous Residents';
      case '/Newsletter':
        return 'Join Newsletter';
      case '/Contact':
        return 'About/Contact';
      default:
        return isPhysician ? 'Doctor of the Month' : 'Resident of the Month';
    }
  };

  return (
    <Navbar expand="lg" expanded={expanded} className={`sub-header ${isPhysician ? 'physician-theme' : 'resident-theme'}`}>
      <div className='container-fluid'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Navbar.Brand className=''>{getBrandName()}</Navbar.Brand>
          {(location.pathname === '/' || location.pathname === '/RESIDENT_OF_MONTH_ROUTE') && (
            <div className="doctor-toggle">
              <button
                className={`toggle-btn ${isPhysician ? 'active physician' : ''}`}
                onClick={() => setIsPhysician(true)}
              >
                Physician
              </button>
              <button
                className={`toggle-btn ${!isPhysician ? 'active resident' : ''}`}
                onClick={() => setIsPhysician(false)}
              >
                Resident
              </button>
            </div>
          )}
        </div>
        <Navbar.Toggle className='ms-auto' aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink 
              exact 
              activeClassName="sub-header-tab active" 
              className="sub-header-tab" 
              to={isPhysician ? "/" : "/RESIDENT_OF_MONTH_ROUTE"} 
              onClick={() => setExpanded(false)}
            >
              {isPhysician ? 'Doctor of the Month' : 'Resident of the Month'}
            </NavLink>
            <NavLink 
              activeClassName="sub-header-tab active" 
              className="sub-header-tab" 
              to={isPhysician ? "/PreviousDoc" : "/PREVIOUS_RESIDENTS_ROUTE"} 
              onClick={() => setExpanded(false)}
            >
              {isPhysician ? 'Previous Doctors' : 'Previous Residents'}
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
    </Navbar>
  );
}

export default NavbarComp;