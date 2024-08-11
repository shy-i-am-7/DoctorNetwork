import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Header from './components/layout/Header';
import DoctorOfMonth from "./pages/DoctorOfMonth"
import PreviousDoc from "./pages/PreviousDoc"
import Newsletter from "./pages/Newsletter"
import Contact from "./pages/Contact"
function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' exact Component={DoctorOfMonth} />
        <Route path='/cats' Component={PreviousDoc} />
        <Route path='/sheeps' Component={Newsletter} />
        <Route path='/goats' Component={Contact} />
      </Routes>
    </Router>
  );
}
  
export default App;
