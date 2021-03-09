import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncFetchDogs } from '../actions';

const Home = ({ dogs, fetchDogs }) => {
  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <>
      <p>Home page</p>
      <p>{dogs.loading ? 'Loading' : ''}</p>
      <p>{`${dogs.message}`}</p>
      <div className="d-flex flex-wrap">
        {dogs.list.map(dog => (
          <div className="photo-container col-12 col-md-6" key={dog.id}>
            <img className="w-100" src={dog.urls.raw} alt="Dog" />
          </div>
        ))}
      </div>
    </>
  );
};
Home.defaultProps = {
  dogs: {
    list: [],
    loading: false,
    message: '',
  },
};

Home.propTypes = {
  dogs: PropTypes.shape({
    list: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    loading: PropTypes.bool,
    message: PropTypes.string,
  }),
  fetchDogs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dogs: state,
});

const mapDispatchToProps = dispatch => ({
  fetchDogs: () => dispatch(asyncFetchDogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
