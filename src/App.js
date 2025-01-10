import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Header from './components/layout/Header';
import DoctorOfMonth from "./pages/DoctorOfMonth"
import PreviousDoc from "./pages/PreviousDoc"
import Newsletter from "./pages/Newsletter"
import Contact from "./pages/Contact"
import WebinarPodcast from "./pages/WebinarPodcast"  // Add this import
import Footer from "./components/layout/Footer";
import { ThemeProvider } from './ThemeContext';
import { useState } from 'react';

function App() {
 
  
  return (
    <ThemeProvider>
      <Router>
        {/* <Header isPhysician={isPhysician} /> */}
        <Header />
        {/* <Navbar isPhysician={isPhysician} onClick={togglePhysician} /> */}
        <Navbar />
        <Routes>
          {/* <Route path='/' Component={() => <DoctorOfMonth isPhysician={isPhysician ?? true} />}  />
          <Route path='/PreviousDoc' Component={() => <PreviousDoc isPhysician={isPhysician ?? true} />} />
          <Route path='/Newsletter' Component={Newsletter} />
          <Route path='/contact' Component={() => <Contact isPhysician={isPhysician ?? true}  setPhysician={setPhysician} setResident={setResident}/>}  />
          <Route path='/WebinarPodcast' Component={WebinarPodcast} />  
          <Route path='/ResidentOfMonth' Component={() => <DoctorOfMonth isPhysician={isPhysician ?? false} />}  />
          <Route path='/PreviousRes' Component={() => <PreviousDoc isPhysician={isPhysician ?? false} />} />
          <Route path='/' Component={() => <DoctorOfMonth isPhysician={isPhysician ?? true} />}  /> */}
          <Route path="/" element={<DoctorOfMonth />} />
          <Route path="/PreviousDoc" element={<PreviousDoc />} />
          <Route path="/Newsletter" element={<Newsletter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/WebinarPodcast" element={<WebinarPodcast />} />
          <Route path="/ResidentOfMonth" element={<DoctorOfMonth />} />
          <Route path="/PreviousRes" element={<PreviousDoc />} />
        </Routes>
        {/* <Footer isPhysician={isPhysician} /> */}
        <Footer />
      </Router> 
    </ThemeProvider>
  );
}

export default App;