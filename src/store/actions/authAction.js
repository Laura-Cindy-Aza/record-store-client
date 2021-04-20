import { helpCheckoutUser, helpCheckUSer } from "../helpers";
import { USER_LOGIN, USER_LOGOUT } from "./types";

export const userLoginAction = (formData) => async (dispatch) => {
  const response = await helpCheckUSer(formData);

  dispatch({
    type: USER_LOGIN,
    payload: response.data,
  });
};

export const logoutUserAction = () => async (dispatch) => {
  const response = await helpCheckoutUser();

  dispatch({
    type: USER_LOGOUT,
    payload: response.data,
  });
};
