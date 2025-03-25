import { combineReducers } from "redux";
import userReducer from "./user.js";
import groupReducer from "./groups.js";

const rootReducer = combineReducers({
  user: userReducer,
  group: groupReducer,
});

export default rootReducer;
