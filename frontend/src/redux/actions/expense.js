export const FETCH_EXPENSES_REQUEST = "FETCH_EXPENSES_REQUEST";
export const FETCH_EXPENSES_SUCCESS = "FETCH_EXPENSES_SUCCESS";
export const FETCH_EXPENSES_FAILURE = "FETCH_EXPENSES_FAILURE";

export const ADD_EXPENSE_REQUEST = "ADD_EXPENSE_REQUEST";
export const ADD_EXPENSE_SUCCESS = "ADD_EXPENSE_SUCCESS";
export const ADD_EXPENSE_FAILURE = "ADD_EXPENSE_FAILURE";

export const UPDATE_EXPENSE_REQUEST = "UPDATE_EXPENSE_REQUEST";
export const UPDATE_EXPENSE_SUCCESS = "UPDATE_EXPENSE_SUCCESS";
export const UPDATE_EXPENSE_FAILURE = "UPDATE_EXPENSE_FAILURE";

export const DELETE_EXPENSE_REQUEST = "DELETE_EXPENSE_REQUEST";
export const DELETE_EXPENSE_SUCCESS = "DELETE_EXPENSE_SUCCESS";
export const DELETE_EXPENSE_FAILURE = "DELETE_EXPENSE_FAILURE";

export const FETCH_GROUP_EXPENSES_REQUEST = "FETCH_GROUP_EXPENSES_REQUEST";
export const FETCH_GROUP_EXPENSES_SUCCESS = "FETCH_GROUP_EXPENSES_SUCCESS";
export const FETCH_GROUP_EXPENSES_FAILURE = "FETCH_GROUP_EXPENSES_FAILURE";

export const SHOW_SUCCESS = "SHOW_SUCCESS";

export const fetchExpensesRequest = () => ({
  type: FETCH_EXPENSES_REQUEST,
});

export const fetchExpensesSuccess = (expenses) => ({
  type: FETCH_EXPENSES_SUCCESS,
  payload: expenses,
});

export const fetchExpensesFailure = (error) => ({
  type: FETCH_EXPENSES_FAILURE,
  payload: error,
});

export const addExpenseRequest = () => ({
  type: ADD_EXPENSE_REQUEST,
});

export const addExpenseSuccess = () => ({
  type: ADD_EXPENSE_SUCCESS,
});

export const addExpenseFailure = (error) => ({
  type: ADD_EXPENSE_FAILURE,
  payload: error,
});

export const updateExpenseRequest = () => ({
  type: UPDATE_EXPENSE_REQUEST,
});

export const updateExpenseSuccess = () => ({
  type: UPDATE_EXPENSE_SUCCESS,
});

export const updateExpenseFailure = (error) => ({
  type: UPDATE_EXPENSE_FAILURE,
  payload: error,
});

export const deleteExpenseRequest = () => ({
  type: DELETE_EXPENSE_REQUEST,
});

export const deleteExpenseSuccess = () => ({
  type: DELETE_EXPENSE_SUCCESS,
});

export const deleteExpenseFailure = (error) => ({
  type: DELETE_EXPENSE_FAILURE,
  payload: error,
});

export const fetchGroupExpensesRequest = () => ({
  type: FETCH_GROUP_EXPENSES_REQUEST,
});

export const fetchGroupExpensesSuccess = (groupExpenses) => ({
  type: FETCH_GROUP_EXPENSES_SUCCESS,
  payload: groupExpenses,
});

export const fetchGroupExpensesFailure = (error) => ({
  type: FETCH_GROUP_EXPENSES_FAILURE,
  payload: error,
});

export const showSuccess = (message) => ({
  type: SHOW_SUCCESS,
  payload: message,
});

const baseURL = process.env.REACT_APP_BASE_URL;

export const fetchExpenses = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchExpensesRequest());
      const url = baseURL + "/api/v1/expenses/userexpenses";
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });
      const data = await response.json();
      dispatch(fetchExpensesSuccess(data.expenses));
    } catch (error) {
      dispatch(fetchExpensesFailure(error.message));
    }
  };
};

export const addExpense = (expenseData) => {
  return async (dispatch) => {
    try {
      dispatch(addExpenseRequest());
      const url = baseURL + "/api/v1/expenses";
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(expenseData),
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      dispatch(addExpenseSuccess());
      dispatch(fetchExpenses());
      dispatch(showSuccess(data?.message));
    } catch (error) {
      dispatch(addExpenseFailure(error.message));
    }
  };
};

export const updateExpense = (expenseId, updatedData) => {
  return async (dispatch) => {
    try {
      dispatch(updateExpenseRequest());
      const url = `${baseURL}/api/v1/expenses/${expenseId}`;
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      dispatch(updateExpenseSuccess());
      dispatch(fetchExpenses());
      dispatch(showSuccess(data?.message));
    } catch (error) {
      dispatch(updateExpenseFailure(error.message));
    }
  };
};

export const deleteExpense = (expenseId) => {
  return async (dispatch) => {
    try {
      dispatch(deleteExpenseRequest());
      const url = `${baseURL}/api/v1/expenses/${expenseId}`;
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      dispatch(deleteExpenseSuccess());
      dispatch(fetchExpenses());
      dispatch(showSuccess(data?.message));
    } catch (error) {
      dispatch(deleteExpenseFailure(error.message));
    }
  };
};

export const fetchGroupExpenses = (groupId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchExpensesRequest());
      const url = baseURL + `/api/v1/expenses/groupexpenses/${groupId}`;
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });
      const data = await response.json();
      dispatch(fetchExpensesSuccess(data?.expenses));
    } catch (error) {
      dispatch(fetchExpensesFailure(error.message));
    }
  };
};
