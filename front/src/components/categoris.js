// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './categoris.css';
function NavVer() {
  return (
    <nav className='topnav_v'>
        <h3 className='Category_title'><u>Categories</u></h3>
      <ul>
        <li>
          <Link to="/Fruits">Fruits</Link>
        </li>
        <li>
          <Link to="/vegitebles">Vegitebles</Link>
        </li>
        <li>
          <Link to="/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/Cloths">Cloths</Link>
        </li>
        <li>
          <Link to="/Building materiyals">Building materiyals</Link>
        </li>
        
        <li>
          <Link to="/electronics">Electronics</Link>
        </li>
        
        <li>
          <Link to="/Building materiyals">Building materiyals</Link>
        </li>
        <li>
          <Link to="/Medicines">Medicines</Link>
        </li>
      </ul>
     
    </nav>

    
  );
}

export default NavVer;