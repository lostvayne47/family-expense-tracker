import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "../actions/user.js";

const initialState = {
  user: null, // Will store user data
  userLoading: false, // Tracks API loading state
  userError: null, // Stores any errors
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, userLoading: true, userError: null }; // Set loading state
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, userLoading: false }; // Store user data
    case FETCH_USER_FAILURE:
      return { ...state, userLoading: false, userError: action.payload }; // Store error message
    default:
      return state;
  }
};

export default userReducer;
