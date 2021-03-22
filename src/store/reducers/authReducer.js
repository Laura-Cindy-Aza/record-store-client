import { USER_LOGIN } from "../actions/types";
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
    // if (state.user !== {}) {
    //   return loggedUser;
    // } else {
    //   return;
    // }
    default:
      return state;
  }
};
export default authenticationReducer;
