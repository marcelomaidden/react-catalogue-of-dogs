export const FETCHING_DOGS = 'FETCH_DOGS';
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCESS';
export const FETCH_DOGS_FAILURE = 'FETCH_DOGS_FAILURE';
export const SET_FILTER = 'SET_FILTER';
export const SET_PAGE = 'SET_PAGE';

export const fetchDogs = () => ({ type: FETCHING_DOGS });
export const fetchSuccess = dogs => ({ type: FETCH_DOGS_SUCCESS, dogs });
export const fetchFailure = error => ({ type: FETCH_DOGS_FAILURE, error });
export const setFilter = filter => ({ type: SET_FILTER, filter });
export const setPage = page => ({ type: SET_PAGE, page });

export const asyncFetchDogs = (filter, page) => (
  async dispatch => {
    dispatch(fetchDogs());
    const searchPage = 'search/photos';
    const criteria = `query=${filter}&page=${page}&per_page=9`;
    const url = `https://api.unsplash.com/${searchPage}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&${criteria}`;
    return fetch(`${url}`)
      .then(result => result.json())
      .then(data => dispatch(fetchSuccess(data, filter)))
      .catch(error => dispatch(fetchFailure(error)));
  }
);
