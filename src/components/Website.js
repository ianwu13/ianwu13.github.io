import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import Home from "./Home.js";
import Research from "./Research.js";
import News from "./News.js";
import CV_Resume from "./CV_Resume.js";
import Portfolio from "./Portfolio.js";

const Website = () => {
  return (
    <div id="website-div">
      <Routes>
        <Route path="/:page?" element={<Sidebar/>} /> 
      </Routes>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/portfolio" element={<Portfolio/>} />
        <Route exact path="/research" element={<Research/>} />
        <Route exact path="/cv_resume" element={<CV_Resume/>} />
        <Route exact path="/news" element={<News/>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>  
    </div>
  );
}

export default Website;