import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Education from './Education';
import Contact from './Contact';
import Projects from './Projects';

const AppRoutes = () => {
  return (


    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Projects />} />
    </Routes>


  );
};

export default AppRoutes;