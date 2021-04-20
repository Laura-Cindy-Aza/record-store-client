import { USER_LOGIN, USER_LOGOUT } from "../actions/types";
const initialState = {
  user: {},
};
const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
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
export default authenticationReducer;
