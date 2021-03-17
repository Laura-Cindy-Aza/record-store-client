import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import recordsReducer from "./recordsReducer";

const allReducers = combineReducers({
    usersFromReducer: usersReducer,
    recordsFromReducer: recordsReducer
});

export default allReducers;