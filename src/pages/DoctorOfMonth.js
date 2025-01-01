import React from "react";
import '../components/doctor_of_month/DoctorOfMonth.css';
import AboutDoctor from '../components/doctor_of_month/AboutDoctor';
import AskQuestion from '../components/doctor_of_month/AskQuestion';
import HowToUse from '../components/doctor_of_month/HowToUse';
import QuestionsList from '../components/doctor_of_month/QuestionList';

function DoctorOfMonth({ isPhysician }) {
  return (
    <div className={isPhysician ? 'physician-theme' : 'resident-theme'}>
      <div className="container">
        <AboutDoctor isPhysician={isPhysician} />
        <AskQuestion isPhysician={isPhysician} />
        <HowToUse isPhysician={isPhysician} />
      </div>
      <div className="module-spacer"></div>
      <div className="container2">
        <QuestionsList isPhysician={isPhysician} />
      </div>
    </div>
  );
}

export default DoctorOfMonth;