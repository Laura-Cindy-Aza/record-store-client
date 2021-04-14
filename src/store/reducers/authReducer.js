import { USER_LOGIN, USER_LOGIN_FAILED, LOGOUT_USER } from "../actions/types";
const initialState = {
  isAuth: false,
  user: {},
  errorMsg: "",
};
const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      localStorage.setItem("auth-data", JSON.stringify(action.payload));
      const loggedUser = {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        isAuth: true,
        errorMsg: "",
      };

      return loggedUser;

    case USER_LOGIN_FAILED:
      const unloggedUser = {
        ...state,

        errorMsg: action.payload,
      };
      return unloggedUser;
    case LOGOUT_USER:
      localStorage.clear();
      const loggedOutUser = {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        isAuth: false,
        errorMsg: "",
      };

      return loggedOutUser;

    default:
      return state;
  }
};
export default authenticationReducer;
