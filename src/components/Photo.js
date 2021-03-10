import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ key, url }) => (
  <div className="photo-container col-12" key={key}>
    <img className="photo" src={url} alt="Dog" />
  </div>
);

Photo.propTypes = {
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  url: PropTypes.string.isRequired,
};

export default Photo;
