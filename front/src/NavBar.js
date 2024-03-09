import React from 'react';
import {NavLink } from 'react-router-dom';
import './NavBar.css';
import SearchInput from './search';


import Footer from './components/footer';



function NavBar() {
  return (
   
      <div>
      <nav className='topnavA'>
        <ul>
          <li>
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/addToCart" className="nav-link" activeClassName="active">
              Add to Cart
            </NavLink>
            
          </li>
          
          {/* <SearchInput /> */}
          <div  className="nav-item-addToCart">
          <li className="nav-item">
            <NavLink to="/login" className="nav-link-login" activeClassName="active">
             Login
            </NavLink>
            
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link-login" activeClassName="active">
             Signup
            </NavLink>
            
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </li>
          </div>
        </ul>
      </nav>
        
      
      <Footer />
        </div>
       
      
  );
}

export default NavBar;