import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Detail.css';

const Photo = ({
  id,
  url,
  photoStyle,
  photoContainer,
}) => (
  <div className={`${photoContainer} col-12`} key={id}>
    <img className={photoStyle} src={url} alt="Dog" />
  </div>
);

Photo.defaultProps = {
  id: 'h2QPKvzieC4',
};

Photo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  url: PropTypes.string.isRequired,
  photoStyle: PropTypes.string.isRequired,
  photoContainer: PropTypes.string.isRequired,
};

export default Photo;
