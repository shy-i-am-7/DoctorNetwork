import React from 'react';
import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { useTheme } from '../../ThemeContext'; // Import the context hook

const NavbarComp = () => {
  const { isPhysician, toggleTheme } = useTheme(); // Access context values
  const [expanded, setExpanded] = React.useState(false);
  const location = useLocation();

  const getBrandName = () => {
    switch (location.pathname) {
      case '/':
      case '/ResidentOfMonth':
        return isPhysician ? 'Doctor of the Month' : 'Resident of the Month';
      case '/PreviousDoc':
      case '/PreviousRes':
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
    <Navbar 
      expand="lg" 
      expanded={expanded} 
      className={`sub-header ${isPhysician ? 'physician-theme' : 'resident-theme'}`}
    >
      <div className='container-fluid'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Navbar.Brand>{getBrandName()}</Navbar.Brand>
          {/* Toggle buttons for switching theme */}
          <div className="doctor-toggle">
            <button
              className={`toggle-btn ${isPhysician ? 'active physician' : ''}`}
              onClick={toggleTheme}
            >
              Physician
            </button>
            <button
              className={`toggle-btn ${!isPhysician ? 'active resident' : ''}`}
              onClick={toggleTheme}
            >
              Resident
            </button>
          </div>
        </div>
        <Navbar.Toggle 
          className='ms-auto' 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink 
              to={isPhysician ? "/" : "/ResidentOfMonth"} 
              className={({ isActive }) =>
                `sub-header-tab ${isActive ? 'active' : ''}`
              } 
              onClick={() => setExpanded(false)}
            >
              {isPhysician ? 'Doctor of the Month' : 'Resident of the Month'}
            </NavLink>
            <NavLink 
              to={isPhysician ? "/PreviousDoc" : "/PreviousRes"} 
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
            <NavLink 
              to="/WebinarPodcast" 
              className={({ isActive }) => `sub-header-tab ${isActive ? 'active' : ''}`} 
              onClick={() => setExpanded(false)}
            >
              Webinar/Podcast
            </NavLink>
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
