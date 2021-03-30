import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink  activeClassName = "menu_active" class="navbar-brand" to="#">Navbar</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0" style={{ marginLeft : 'auto'}}>
        <li class="nav-item">
          <NavLink exact activeClassName = "menu_active" class="nav-link active" aria-current="page" to = "/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName = "menu_active" exact class="nav-link" to="/service">Services</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" activeClassName = "menu_active" exact to="/contact">Contact us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" activeClassName = "menu_active" exact to="/about">About us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
    );
}

export default Navbar;