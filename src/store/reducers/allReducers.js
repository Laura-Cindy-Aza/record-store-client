import { combineReducers } from "redux";
import authenticationReducer from "./authReducer";
import usersReducer from "./usersReducer";
import recordsReducer from "./recordsReducer";
import cartReducer from './cartReducer'

const allReducers = combineReducers({
  authFromReducer: authenticationReducer,
  userFromReducer: usersReducer,
  recordsFromReducer: recordsReducer,
  //cartFromReducer: cartReducer,

});

export default allReducers;
