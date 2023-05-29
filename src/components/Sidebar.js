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
    case "news":
      return "News";
    default:
      return "Whoops!";
  };
}

const Sidebar = () => {
  const {page} = useParams();
  document.title = (page ? toPagename(page) + " — " : "") + name;
  return (
    <div id="menu-div">
        <h1>{name}</h1>
        <Link to="/" className={page === undefined ? "active-page" : ""}>about</Link>
        <Link to="/research" className={page === "research" ? "active-page" : ""}>research</Link>
        <Link to="/news" className={page === "news" ? "active-page" : ""}>news</Link>
    </div>
  );
}

export default Sidebar;