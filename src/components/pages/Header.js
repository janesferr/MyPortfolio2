import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link to="/Portofolio-React" className={location.pathname === "/Portofolio-React" ? "nav-link active" : "nav-link"}>
      
        Jane Sferrazza
        <i className="fa fa-home fa-2x"></i>
      </Link>
    </li>
    <li className="nav-item">
    </li>
    <li className="nav-item">
      <Link
        to="/projects"
        className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
      >
         <i className="fa fa-th fa-2x">
         
           </i> 
       
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/contact"
        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
      >
         <i className="fa fa-envelope fa-2x"></i>
       
      </Link>
    </li>
    
  </ul>
  );
}

export default Header;
