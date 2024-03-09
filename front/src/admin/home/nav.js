import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav_loged.css';

function Navbar() {
  return (
    <div className='topnav_loged'>

      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li className='login_nav'>
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li className='login_nav'>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className='login_nav'>
              <NavLink to="/addUser">addUser</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;