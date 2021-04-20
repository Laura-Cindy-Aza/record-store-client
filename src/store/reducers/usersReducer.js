import { ADD_USER, EDIT_USER, USER_LOGIN, USER_LOGOUT } from "../actions/types";

// a reducer is a function that takes 2 parameters (initialState, action) and returns a copy of the state to the store
// every reducer needs:
// 1. initial state
// 2. logic conditions => if statement / switch case

const initialState = {
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };

    case EDIT_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    case USER_LOGIN:
      const loggedUser = {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };

      return loggedUser;

    case USER_LOGOUT:
      localStorage.clear();
      const loggedOutUser = {
        ...state,
        user: {},
      };

      return loggedOutUser;

    default:
      return state;
  }
};

export default usersReducer;
