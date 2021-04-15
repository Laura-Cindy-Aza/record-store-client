import { combineReducers } from "redux";
import authenticationReducer from "./authReducer";
import usersReducer from "./usersReducer";
import recordsReducer from "./recordsReducer";
<<<<<<< HEAD
import cartReducer from './cartReducer'
=======
import cartReducer from "./cartReducer";
>>>>>>> 1e99768c5fe1df773db7af0530e3e19ecaa21d9c

const allReducers = combineReducers({
  authFromReducer: authenticationReducer,
  userFromReducer: usersReducer,
  recordsFromReducer: recordsReducer,
<<<<<<< HEAD
  //cartFromReducer: cartReducer,

=======
  cartFromReducer: cartReducer,
>>>>>>> 1e99768c5fe1df773db7af0530e3e19ecaa21d9c
});

export default allReducers;