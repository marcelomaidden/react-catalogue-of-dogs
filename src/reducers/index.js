import { FETCHING_DOGS, FETCH_DOGS_SUCCESS, FETCH_DOGS_FAILURE } from '../actions';

export const defaultState = {
  list: [],
  loading: false,
  message: '',
};

const dogsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING_DOGS:
      return { ...state, loading: true, message: '' };
    case FETCH_DOGS_SUCCESS:
      return { list: action.dogs, loading: false, message: '' };
    case FETCH_DOGS_FAILURE:
      return { ...state, loading: false, message: action.error };
    default:
      return state;
  }
};

export default dogsReducer;
