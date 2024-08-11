import React, { Component } from "react";
import '../components/doctor_of_month/DoctorOfMonth.css'; // Import the CSS file
import AboutDoctor from '../components/doctor_of_month/AboutDoctor';
import AskQuestion from '../components/doctor_of_month/AskQuestion';
import HowToUse from '../components/doctor_of_month/HowToUse';
import QuestionsList from '../components/doctor_of_month/QuestionList';
//import AnswersList from '../components/doctor_of_month/AnswersList';

function DoctorOfMonth() {
  return (
    <div>
      <div className="container">
        <AboutDoctor />
        <AskQuestion />
        <HowToUse />
      </div>
      <div className="module-spacer"></div>
      <div className="container2">
        <QuestionsList />
      </div>
    </div>
  );
}

export default DoctorOfMonth;

