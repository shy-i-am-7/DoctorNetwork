import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Header from './components/layout/Header';
import DoctorOfMonth from "./pages/DoctorOfMonth"
import PreviousDoc from "./pages/PreviousDoc"
import Newsletter from "./pages/Newsletter"
import contact from "./pages/Contact"
import WebinarPodcast from "./pages/WebinarPodcast"  // Add this import
import Footer from "./components/layout/Footer";
import { useState } from 'react';

function App() {
  const [isPhysician, setIsPhysician] = useState(true);
  
  const togglePhysician = () => {
    const newValue = (isPhysician === true ? false : true)
    setIsPhysician(newValue);
    console.log("after " + newValue);
  }
  
  return (
    <Router>
      <Header isPhysician={isPhysician} />
      <Navbar isPhysician={isPhysician} onClick={togglePhysician} />
      <Routes>
        <Route path='/' Component={() => <DoctorOfMonth isPhysician={isPhysician ?? true} />}  />
        <Route path='/PreviousDoc' Component={() => <PreviousDoc isPhysician={isPhysician ?? true} />} />
        <Route path='/Newsletter' Component={Newsletter} />
        <Route path='/contact' Component={contact} />
        <Route path='/WebinarPodcast' Component={WebinarPodcast} />  {/* Add this route */}
        {/* Add routes for resident pages */}
        <Route path='/ResidentOfMonth' Component={() => <DoctorOfMonth isPhysician={isPhysician ?? true} />}  />
        <Route path='/PreviousRes' Component={() => <PreviousDoc isPhysician={isPhysician ?? true} />} />
        <Route path='/' Component={() => <DoctorOfMonth isPhysician={isPhysician ?? true} />}  />
      </Routes>
      <Footer isPhysician={isPhysician} />
    </Router>
  );
}

export default App;