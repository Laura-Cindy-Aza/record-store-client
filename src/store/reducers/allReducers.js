import { combineReducers } from "redux";
import authenticationReducer from "./authReducer";
import usersReducer from "./usersReducer";
import recordsReducer from "./recordsReducer";

const allReducers = combineReducers({
  authFromReducer: authenticationReducer,
  userFromReducer: usersReducer,
  recordsFromReducer: recordsReducer,
});

export default allReducers;
