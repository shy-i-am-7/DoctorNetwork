import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Header from './components/layout/Header';
import DoctorOfMonth from "./pages/DoctorOfMonth"
import PreviousDoc from "./pages/PreviousDoc"
import Newsletter from "./pages/Newsletter"
import contact from "./pages/Contact"
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' exact Component={DoctorOfMonth} />
        <Route path='/PreviousDoc' Component={PreviousDoc} />
        <Route path='/Newsletter' Component={Newsletter} />
        <Route path='/contact' Component={contact} />
      </Routes>
      <Footer />
    </Router>
  );
}
  
export default App;
