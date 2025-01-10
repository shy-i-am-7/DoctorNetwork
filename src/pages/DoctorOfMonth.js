import React, { useState } from "react";
import '../components/doctor_of_month/DoctorOfMonth.css';
import AboutDoctor from '../components/doctor_of_month/AboutDoctor';
import AskQuestion from '../components/doctor_of_month/AskQuestion';
import HowToUse from '../components/doctor_of_month/HowToUse';
import QuestionsList from '../components/doctor_of_month/QuestionList';
import { useTheme } from "../ThemeContext";

function DoctorOfMonth() {
  
  const { isPhysician } = useTheme(); // Access the current theme using the context
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  // Handler to trigger refresh in QuestionList
  const handleQuestionSubmit = () => {
    setRefreshTrigger((prev) => !prev); // Toggle the value to force a refresh
  };

  console.log("DoctorOfMonth" + isPhysician);
  return (
    <div className={{isPhysician} ? 'physicin-theme' : 'resident-theme'}> 
    {/* INTENTIONAL TYPO IN PHYSICIAN ^ */}
      {/* {isPhysician} */}
      <div className="how-to-use-container">
        <HowToUse isPhysician={isPhysician} />
      </div>
      <div className="main-content-container">
        <div className="doctor-info-container">
          <AboutDoctor />
          <AskQuestion onQuestionSubmit={handleQuestionSubmit}/>
        </div>
      </div>
      <div className="container2">
        <QuestionsList refreshTrigger={refreshTrigger}/>
      </div>
    </div>
  );
}

export default DoctorOfMonth;