import {
  FETCH_GROUP_REQUEST,
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAILURE,
} from "../actions/groups.js";

const initialState = {
  group: null, // Will store user data
  groupLoading: false, // Tracks API loading state
  error: null, // Stores any errors
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUP_REQUEST:
      return { ...state, groupLoading: true, error: null }; // Set loading state
    case FETCH_GROUP_SUCCESS:
      return { ...state, group: action.payload, groupLoading: false }; // Store user data
    case FETCH_GROUP_FAILURE:
      return { ...state, groupLoading: false, error: action.payload }; // Store error message
    default:
      return state;
  }
};

export default groupReducer;
