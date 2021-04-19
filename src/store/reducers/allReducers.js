import { combineReducers } from "redux";
import authenticationReducer from "./authReducer";
import usersReducer from "./usersReducer";
import recordsReducer from "./recordsReducer";
import cartReducer from "./cartReducer";

const allReducers = combineReducers({
  authUser: authenticationReducer,
  user: usersReducer,
  records: recordsReducer,
  cart: cartReducer,
});

export default allReducers;
