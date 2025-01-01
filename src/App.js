import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Header from './components/layout/Header';
import DoctorOfMonth from "./pages/DoctorOfMonth"
import PreviousDoc from "./pages/PreviousDoc"
import Newsletter from "./pages/Newsletter"
import contact from "./pages/Contact"
import Footer from "./components/layout/Footer";
import { useState } from 'react';

function App() {
  const [isPhysician, setIsPhysician] = useState(true);

  return (
    <Router>
      <Header isPhysician={isPhysician} />
      <Navbar 
        isPhysician={isPhysician} 
        setIsPhysician={setIsPhysician}
      />
      <Routes>
        <Route path='/' exact Component={DoctorOfMonth} />
        <Route path='/PreviousDoc' Component={PreviousDoc} />
        <Route path='/Newsletter' Component={Newsletter} />
        <Route path='/contact' Component={contact} />
        {/* Add routes for resident pages */}
        <Route path='/RESIDENT_OF_MONTH_ROUTE' Component={DoctorOfMonth} />
        <Route path='/PREVIOUS_RESIDENTS_ROUTE' Component={PreviousDoc} />
      </Routes>
      <Footer isPhysician={isPhysician} />
    </Router>
  );
}
  
export default App;