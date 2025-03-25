import { combineReducers } from "redux";
import userReducer from "./user.js";
import groupReducer from "./groups.js";
import expenseReducer from "../reducers/expense.js";

const rootReducer = combineReducers({
  user: userReducer,
  group: groupReducer,
  expense: expenseReducer,
});

export default rootReducer;
