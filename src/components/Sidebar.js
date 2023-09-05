import React from 'react';
import {
  Link,
  useParams,
} from "react-router-dom";
import { name } from '../content/profile_info.js';

const toPagename = (page) => {
  switch (page) {
    case "research":
      return "Research";
    case "portfolio":
      return "Portfolio";
    case "cv_resume":
      return "CV/Resume";
    default:
      return "Whoops!";
  };
}

const Sidebar = () => {
  const {page} = useParams();
  document.title = (page ? toPagename(page) + " — " : "") + name;
  return (
    <div id="menu-div">
        <a href="/" className="header">
          <h1>{name}</h1>
        </a>
        <Link to="/about" className={page === undefined ? "active-page" : ""}>about</Link>
        <Link to="/cv_resume" className={page === "cv_resume" ? "active-page" : ""}>cv/resume</Link>
        <Link to="/portfolio" className={page === "portfolio" ? "active-page" : ""}>portfolio</Link>
        <Link to="/research" className={page === "research" ? "active-page" : ""} style={{display: 'None'}}>research</Link>
    </div>
  );
}

export default Sidebar;
