import {
  FETCH_GROUP_REQUEST,
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAILURE,
} from "../actions/groups.js";

const initialState = {
  group: null, // Will store user data
  loading: false, // Tracks API loading state
  error: null, // Stores any errors
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUP_REQUEST:
      return { ...state, loading: true, error: null }; // Set loading state
    case FETCH_GROUP_SUCCESS:
      return { ...state, user: action.payload, loading: false }; // Store user data
    case FETCH_GROUP_FAILURE:
      return { ...state, loading: false, error: action.payload }; // Store error message
    default:
      return state;
  }
};

export default groupReducer;
