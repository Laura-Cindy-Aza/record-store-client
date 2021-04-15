import { helpCheckoutUser, helpCheckUSer } from "../helpers";
import { USER_LOGIN, USER_LOGIN_FAILED, LOGOUT_USER } from "./types";

export const userLoginAction = (formData) => async (dispatch) => {
  const response = await helpCheckUSer(formData);
  console.log("login action", response);
  if (!response.data.msg) {
    dispatch({
      type: USER_LOGIN,
      payload: response.data,
    });
  } else {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload: response.data.msg,
    });
  }
};

export const logoutUserAction = () => async (dispatch) => {
  const response = await helpCheckoutUser();
  localStorage.removeItem("auth-data");
  dispatch({
    type: LOGOUT_USER,
    payload: response.data,
  });
};
