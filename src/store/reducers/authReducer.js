import { USER_LOGIN, USER_LOGIN_FAILED } from "../actions/types";
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

    default:
      return state;
  }
};
export default authenticationReducer;
