import React from 'react';

function AboutDoctor() {
  return (
    <div className="box about-author">
      <div className="title">About the Doctor</div>
      <div className="author-photo">
        <img src="https://img.freepik.com/premium-vector/doctor-profile-with-medical-service-icon_617655-48.jpg" alt="Picture of Doctor" />
      </div>
      <div className="author-name">Dr. Jane Doe</div>
      <div className="author-description">
        Dr. John Doe is currently an attending physician at John Doe Hospital, specializing in Cardiology. John Doe attending the University of So-And-So and completed his residency at Jane Doe Hospital.
      </div>
      <a href="#" className="submit-button">Click here to learn more</a>
    </div>
  );
}

export default AboutDoctor;
