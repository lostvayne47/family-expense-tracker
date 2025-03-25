import {
  FETCH_GROUP_REQUEST,
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAILURE,
  CREATE_GROUP_REQUEST,
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_FAILURE,
  JOIN_GROUP_REQUEST,
  JOIN_GROUP_SUCCESS,
  JOIN_GROUP_FAILURE,
  DELETE_GROUP_REQUEST,
  DELETE_GROUP_SUCCESS,
  DELETE_GROUP_FAILURE,
  SHOW_SUCCESS,
} from "../actions/groups.js";

const initialState = {
  groups: [], // Will store user data
  groupLoading: false, // Tracks API loading state
  groupError: null, // Stores any errors
  groupSuccess: null, // Stores any successful info
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUP_REQUEST:
      return {
        ...state,
        groupLoading: true,
        groupError: null,
        groupSuccess: null,
      }; // Set loading state
    case FETCH_GROUP_SUCCESS:
      return { ...state, groups: action.payload, groupLoading: false }; // Store user data
    case FETCH_GROUP_FAILURE:
      return { ...state, groupLoading: false, groupError: action.payload }; // Store error message
    case CREATE_GROUP_REQUEST:
      return {
        ...state,
        groupLoading: true,
        groupError: null,
        groupSuccess: null,
      }; // Set loading state
    case CREATE_GROUP_SUCCESS:
      return { ...state, groupLoading: false };
    case CREATE_GROUP_FAILURE:
      return { ...state, groupLoading: false, groupError: action.payload }; // Store error message
    case JOIN_GROUP_REQUEST:
      return {
        ...state,
        groupLoading: true,
        groupError: null,
        groupSuccess: null,
      }; // Set loading state
    case JOIN_GROUP_SUCCESS:
      return { ...state, groupLoading: false };
    case JOIN_GROUP_FAILURE:
      return { ...state, groupLoading: false, groupError: action.payload }; // Store error message
    case DELETE_GROUP_REQUEST:
      return {
        ...state,
        groupLoading: true,
        groupError: null,
        groupSuccess: null,
      }; // Set loading state
    case DELETE_GROUP_SUCCESS:
      return { ...state, groupLoading: false };
    case DELETE_GROUP_FAILURE:
      return { ...state, groupLoading: false, groupError: action.payload }; // Store error message
    case SHOW_SUCCESS:
      return { ...state, groupLoading: false, groupSuccess: action.payload }; // Stores any successful info
    default:
      return state;
  }
};

export default groupReducer;
