import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import AddToCart from './components/addToCart/addToCart';
import LoginForm from './components/login/Login';
import SignupForm from './components/signup/signup';
import NavVer from './components/categoris';
import HomeAdmin from './admin/home/home';
import NavBar from './NavBar';
import SearchInput from './search';



function Main() {
  return (
    <div>
    <Router>
     
      <NavBar />
   
      <NavVer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/addToCart" component={AddToCart} />
          <Route path="/SearchInput" component={AddToCart} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/home" component={HomeAdmin} />
        </Switch>
     
      
     
    </Router>
    </div>
  );
}

export default Main;