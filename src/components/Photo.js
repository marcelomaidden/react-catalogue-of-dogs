import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ id, url }) => (
  <div className="photo-container col-12" key={id}>
    <img className="photo" src={url} alt="Dog" />
  </div>
);

Photo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  url: PropTypes.string.isRequired,
};

export default Photo;
