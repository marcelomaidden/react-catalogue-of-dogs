import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { asyncFetchDogs, setPage } from '../actions';

const Home = ({ dogs, fetchDogs, setPage }) => {
  const [filter, setFilter] = useState('dogs-human');
  useEffect(() => {
    if (dogs.page !== undefined) {
      fetchDogs(filter, dogs.page);
    }
    if (dogs.filter !== undefined) {
      setFilter(dogs.filter);
      fetchDogs(dogs.filter, dogs.page);
    }
  }, [dogs.filter, dogs.page]);

  const {
    list,
    message,
    loading,
  } = dogs;

  const pagination = [1, 2, 3, 4, 5];

  return (
    <>
      <ul className="d-flex list-unstyled">
        {
          pagination.map(page => (
            <li key={page}>
              <Link
                to="/"
                className="btn bg-success m-2"
                onClick={
                  () => setPage(page)
                }
                alt={`Page ${page}`}
              >
                {page}
              </Link>
            </li>
          ))
        }
      </ul>
      {
        loading ? (
          <div className="spinner-border m-auto" role="status">
            <span className="sr-only" />
          </div>
        )
          : ''
      }
      <p>{`${message}`}</p>
      <div className="d-flex flex-wrap">
        {list.map(dog => (
          <div className="photo-container col-12 col-md-4 p-2 mb-2" key={dog.id}>
            <img className="photo" src={dog.urls.small} alt="Dog" />
          </div>
        ))}
      </div>
    </>
  );
};

Home.propTypes = {
  dogs: PropTypes.shape({
    list: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]).isRequired,
    loading: PropTypes.bool,
    message: PropTypes.string,
    filter: PropTypes.string,
    page: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number],
    ),
  }).isRequired,
  fetchDogs: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dogs: state,
});

const mapDispatchToProps = dispatch => ({
  fetchDogs: (filter, page) => dispatch(asyncFetchDogs(filter, page)),
  setPage: page => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
