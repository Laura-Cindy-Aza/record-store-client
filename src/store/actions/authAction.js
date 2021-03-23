import { helpCheckUSer } from "../helpers";
import { USER_LOGIN, USER_LOGIN_FAILED } from "./types";

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
