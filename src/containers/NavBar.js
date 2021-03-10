import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../stylesheets/index.css';
import CATEGORIES from '../actions/categories';
import { setFilter } from '../actions';
import '../stylesheets/NavBar.css';

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
        <div className="dropdown position-absolute drop-categories">
          <button className="btn btn-danger rounded dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {CATEGORIES.map(category => (
              <Link
                to={`/category/${category.id}`}
                onClick={() => handleClick(category.url)}
                className="dropdown-item"
                key={category.id}
              >
                {category.name}
              </Link>
            ))}
          </ul>
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
