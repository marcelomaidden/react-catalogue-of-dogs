import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../stylesheets/index.css';
import CATEGORIES from '../actions/categories';
import { setFilter } from '../actions';

const NavBar = ({ setFilter }) => {
  const handleClick = filter => {
    setFilter(filter);
  };
  return (
    <header className="p-5">
      <nav className="d-flex justify-content-between">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
