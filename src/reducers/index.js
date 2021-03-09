import {
  FETCHING_DOGS,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_FAILURE,
  SET_FILTER,
  SET_PAGE,
} from '../actions';

export const defaultState = {
  list: [],
  loading: false,
  message: '',
  filter: 'dogs-human',
  page: 1,
};

const dogsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING_DOGS:
      return { ...state, loading: true, message: '' };
    case FETCH_DOGS_SUCCESS:
      return {
        list: action.dogs.results,
        loading: false,
        message: '',
        filter: action.filter,
      };
    case FETCH_DOGS_FAILURE:
      return { ...state, loading: false, message: action.error };
    case SET_FILTER:
      return { ...state, filter: action.filter };
    case SET_PAGE:
      return { ...state, page: action.page };
    default:
      return state;
  }
};

export default dogsReducer;
