import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../stylesheets/index.css';
import { setFilter } from '../actions';
import '../stylesheets/NavBar.css';
import Filter from '../components/Filter';

const NavBar = ({ setFilter }) => {
  const handleClick = filter => {
    setFilter(filter);
  };
  return (
    <header>
      <div className="logo-container">
        <Link to="/"><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" /></Link>
      </div>
      <nav className="d-flex nav-1">
        <span className="text-white font-lilita-one mx-auto">
          A home without dogs is a place without life
        </span>
      </nav>
      <nav className="d-flex justify-content-between nav-links p-5 position-relative">
        <ul className="list-unstyled d-flex font-lilita-one">
          <Link to="/" className="text-white text-decoration-none px-3">Home</Link>
          <Link to="/about" className="text-white text-decoration-none">About</Link>
        </ul>
        <div className="dropdown position-absolute drop-categories">
          <button className="btn btn-danger rounded dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </button>
          <Filter handleOnClick={handleClick} />
        </div>
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setFilter: filter => (dispatch(setFilter(filter))),
});

export default connect(null, mapDispatchToProps)(NavBar);
