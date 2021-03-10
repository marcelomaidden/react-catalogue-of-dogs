import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CATEGORIES from '../actions/categories';

const Filter = ({ handleOnClick }) => (
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {CATEGORIES.map(category => (
      <Link
        to={`/category/${category.id}`}
        onClick={() => handleOnClick(category.url)}
        className="dropdown-item"
        key={category.id}
      >
        {category.name}
      </Link>
    ))}
  </ul>
);

Filter.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default Filter;
