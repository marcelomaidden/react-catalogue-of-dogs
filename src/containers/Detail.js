import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { asyncFetchDetail } from '../actions';
import Photo from '../components/Photo';
import Spinner from '../components/Spinner';

const Detail = ({ dogs, fetchDetail }) => {
  const [dog, setDog] = useState({ id: null, urls: { small: '' } });
  const [loaded, setLoaded] = useState(false);
  const { dogId } = useParams();
  useEffect(() => {
    if (loaded === false) {
      fetchDetail(dogId, 1)
        .then(({ dog }) => {
          setLoaded(true);
          setDog(dog);
        });
    }
  }, [loaded]);

  const {
    loading,
  } = dogs;

  const {
    urls,
    alt_description: alt,
    description,
  } = dog;
  return (
    <>
      {
        loading ? (
          <Spinner />
        )
          : ''
      }
      <div className="d-flex flex-wrap">
        <div className="col-6"><Photo id={dogId} url={urls.small} /></div>
        <div className="col-6 d-flex flex-column photo-info">
          <div><h4 className="h4">{description}</h4></div>
          <div>{alt}</div>
        </div>
      </div>
    </>
  );
};

Detail.propTypes = {
  dogs: PropTypes.shape({
    loading: PropTypes.bool,
    filter: PropTypes.string,
  }).isRequired,
  fetchDetail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dogs: state,
});

const mapDispatchToProps = dispatch => ({
  fetchDetail: id => dispatch(asyncFetchDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
