import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import ResumePage from './components/ResumePage';
// import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
