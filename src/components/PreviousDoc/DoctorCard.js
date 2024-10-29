import React, { useEffect } from "react";

const DoctorCard = ({ doctor, onQuestionSelect }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.matches(".dropbtn")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
        // event.preventDefault();
      }
      
    };

    window.addEventListener("click", handleClickOutside);
    

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
        <div className="questions-section">
          <div className="dropdown">
            <button
              onClick={(e) => e.target.nextElementSibling.classList.toggle("show")}
              className="dropbtn"
            >
              Select a question
            </button>
            <div className="dropdown-content">
              {doctor.questions &&
                doctor.questions.map((question, index) => (
                  <a href="#!" key={index} onClick={() => onQuestionSelect(index)}>
                    {question}
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div className="webinar-wrapper">
          {doctor.webinarLink != null ? (
              <a className="webinarbtn" href={doctor.webinarLink}  target="_blank" rel="noreferrer" aria-label="Link to Webinar"><span>{doctor.webinarButtonName}</span></a>
            ):(
              <div></div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
