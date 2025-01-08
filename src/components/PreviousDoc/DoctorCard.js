import React from "react";

const DoctorCard = ({ doctor, onDoctorSelect }) => {
  if (!doctor) {
    return null;
  }

  return (
    <div className="doctor-card">
      <div className="doctor-photo-name">
        <div className="doctor-photo">
          <img srcSet={doctor.photoURL} alt={doctor.name} />
        </div>
        <h2 className="doctor-name">Dr. {doctor.name}</h2>
      </div>
      <div className="doctor-info-left">
        <div className="doctor-top-content">
          <div className="doctor-description">{doctor.description}</div>
          <div className="info-item">
            <span className="info-label">Specialty:</span> {doctor.specialty}
          </div>
          <div className="info-item">
            <span className="info-label">Years in Practice:</span> {doctor.graduated}
          </div>
          <div className="info-item">
            <span className="info-label">Currently working at:</span> {doctor.currentWork}
          </div>
          <div className="info-item">
            <span className="info-label">Favorite pastime:</span> {doctor.hobby}
          </div>
        </div>
        <div className="button-container">
          <div className="info-wrapper">
            {doctor.docinfoName != null && (
              <button 
                className="webinarbtn" 
                onClick={() => onDoctorSelect(doctor)}
                aria-label="View Doctor Details"
              >
                <span>{doctor.docinfoName}</span>
              </button>
            )}
          </div>
          <br className="breaktag1" />
          <div className="webinar-wrapper">
            {doctor.webinarLink != null && (
              <a 
                className="webinarbtn" 
                href={doctor.webinarLink}  
                target="_blank" 
                rel="noreferrer" 
                aria-label="Link to Webinar"
              >
                <span>{doctor.webinarButtonName}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;