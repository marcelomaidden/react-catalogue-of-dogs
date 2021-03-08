import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.css';

const NavBar = () => (
  <header className="p-5">
    <nav className="d-flex justify-content-between">
      Here is the navigation bar
      <ul className="list-unstyled d-flex">
        <li><Link to="/" className="mr-3">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
