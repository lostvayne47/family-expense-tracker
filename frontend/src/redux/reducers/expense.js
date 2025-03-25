import {
  FETCH_EXPENSES_REQUEST,
  FETCH_EXPENSES_SUCCESS,
  FETCH_EXPENSES_FAILURE,
  ADD_EXPENSE_REQUEST,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_FAILURE,
  UPDATE_EXPENSE_REQUEST,
  UPDATE_EXPENSE_SUCCESS,
  UPDATE_EXPENSE_FAILURE,
  DELETE_EXPENSE_REQUEST,
  DELETE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_FAILURE,
  FETCH_GROUP_EXPENSES_REQUEST,
  FETCH_GROUP_EXPENSES_SUCCESS,
  FETCH_GROUP_EXPENSES_FAILURE,
  SHOW_SUCCESS,
} from "../actions/expense.js";

const initialState = {
  expenses: [],
  expenseLoading: false,
  expenseError: null,
  expenseSuccess: null,
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch expenses
    case FETCH_EXPENSES_REQUEST:
      return {
        ...state,
        expenseLoading: true,
        expenseError: null,
        expenseSuccess: null,
      };
    case FETCH_EXPENSES_SUCCESS:
      return { ...state, expenses: action.payload, expenseLoading: false };
    case FETCH_EXPENSES_FAILURE:
      return { ...state, expenseLoading: false, expenseError: action.payload };

    // Add expense
    case ADD_EXPENSE_REQUEST:
      return {
        ...state,
        expenseLoading: true,
        expenseError: null,
        expenseSuccess: null,
      };
    case ADD_EXPENSE_SUCCESS:
      return { ...state, expenseLoading: false };
    case ADD_EXPENSE_FAILURE:
      return { ...state, expenseLoading: false, expenseError: action.payload };

    // Update expense
    case UPDATE_EXPENSE_REQUEST:
      return {
        ...state,
        expenseLoading: true,
        expenseError: null,
        expenseSuccess: null,
      };
    case UPDATE_EXPENSE_SUCCESS:
      return { ...state, expenseLoading: false };
    case UPDATE_EXPENSE_FAILURE:
      return { ...state, expenseLoading: false, expenseError: action.payload };

    // Delete expense
    case DELETE_EXPENSE_REQUEST:
      return {
        ...state,
        expenseLoading: true,
        expenseError: null,
        expenseSuccess: null,
      };
    case DELETE_EXPENSE_SUCCESS:
      return { ...state, expenseLoading: false };
    case DELETE_EXPENSE_FAILURE:
      return { ...state, expenseLoading: false, expenseError: action.payload };

    //Fetch group expenses
    case FETCH_GROUP_EXPENSES_REQUEST:
      return {
        ...state,
        groupLoading: true,
        groupError: null,
        groupSuccess: null,
      };
    case FETCH_GROUP_EXPENSES_SUCCESS:
      return { ...state, groupExpenses: action.payload, groupLoading: false };
    case FETCH_GROUP_EXPENSES_FAILURE:
      return { ...state, groupLoading: false, groupError: action.payload };

    // Show success message
    case SHOW_SUCCESS:
      return {
        ...state,
        expenseLoading: false,
        expenseSuccess: action.payload,
      };

    default:
      return state;
  }
};

export default expenseReducer;
