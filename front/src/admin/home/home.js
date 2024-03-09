import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './nav';
import Products from './products/products';
import Categories from './categories/categories';
import Orders from './orders/orders';
import AddUser from './addUser/addUser';
import './home.css';

function HomeAdmin() {
  return (
    <Router>
      <Navbar />
      <div  className="page-content">
      <Switch>
        <Route exact path="/products" component={Products} />
        <Route path="/categories" component={Categories} />
        <Route path="/addUser" component={AddUser} />
        <Route path="/" component={Orders} />
      </Switch>
      </div>
     
      
    </Router>
  );
}

export default HomeAdmin;
