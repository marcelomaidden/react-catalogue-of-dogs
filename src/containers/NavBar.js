import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.css';

const NavBar = () => (
  <nav>
    Here is the navigation bar
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default NavBar;
