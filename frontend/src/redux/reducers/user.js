import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "../actions/user.js";

const initialState = {
  user: null, // Will store user data
  loading: false, // Tracks API loading state
  error: null, // Stores any errors
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null }; // Set loading state
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false }; // Store user data
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload }; // Store error message
    default:
      return state;
  }
};

export default userReducer;
