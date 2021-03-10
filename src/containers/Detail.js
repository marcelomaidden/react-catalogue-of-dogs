import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { asyncFetchDogs } from '../actions';
import Photo from '../components/Photo';
import Spinner from '../components/Spinner';

const Detail = ({ dogs, fetchDogs }) => {
  const [dog, setDog] = useState({ id: null, urls: { small: '' } });
  const [loaded, setLoaded] = useState(false);
  const { dogId } = useParams();
  useEffect(() => {
    if (loaded === false) {
      fetchDogs(dogId, 1)
        .then(({ dogs }) => {
          setLoaded(true);
          setDog(dogs);
        });
    }
  }, [loaded]);

  const {
    message,
    loading,
  } = dogs;

  const { id, urls } = dog;
  return (
    <>
      {
        loading ? (
          <Spinner />
        )
          : ''
      }
      <p>{`${message}`}</p>
      <div className="d-flex flex-wrap">
        <Photo key={id} url={urls.small} />
      </div>
    </>
  );
};

Detail.propTypes = {
  dogs: PropTypes.shape({
    loading: PropTypes.bool,
    message: PropTypes.string,
    filter: PropTypes.string,
  }).isRequired,
  fetchDogs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dogs: state,
});

const mapDispatchToProps = dispatch => ({
  fetchDogs: (filter, page) => dispatch(asyncFetchDogs(filter, page, true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
