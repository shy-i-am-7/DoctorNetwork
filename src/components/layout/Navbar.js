import React from 'react';
import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComp = ({ isPhysician, onClick }) => {
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
                onClick={onClick}
              >
                Physician
              </button>
              <button
                className={`toggle-btn ${!isPhysician ? 'active resident' : ''}`}
                onClick={onClick}
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
              to={isPhysician ? "/" : "/RESIDENT_OF_MONTH_ROUTE"} 
              className={({ isActive }) =>
                `sub-header-tab ${isActive ? 'active' : ''}`
              } 
              onClick={() => setExpanded(false)}
            >
              {isPhysician ? 'Doctor of the Month' : 'Resident of the Month'}
            </NavLink>
            <NavLink 
              to={isPhysician ? "/PreviousDoc" : "/PREVIOUS_RESIDENTS_ROUTE"} 
              className={({ isActive }) => `sub-header-tab ${isActive ? 'active' : ''}`} 
              onClick={() => setExpanded(false)}
            >
              {isPhysician ? 'Previous Doctors' : 'Previous Residents'}
            </NavLink>

            <NavLink 
              to="/Newsletter" 
              className={({ isActive }) => `sub-header-tab ${isActive ? 'active' : ''}`} 
              onClick={() => setExpanded(false)}
            >
              Join Newsletter
            </NavLink>

            <a 
              href="https://www.youtube.com/@PhysiLink" 
              target="_blank" 
              rel="noreferrer" 
              className="sub-header-tab"
              onClick={() => setExpanded(false)}
            >
              Webinars
            </a>

            <NavLink 
              to="/Contact" 
              className={({ isActive }) => `sub-header-tab ${isActive ? 'active' : ''}`} 
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