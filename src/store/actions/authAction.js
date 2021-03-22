import { helpCheckUSer } from "../helpers";
import { USER_LOGIN } from "./types";

export const userLoginAction = (formData) => async (dispatch) => {
  const response = await helpCheckUSer(formData);
  console.log("login action", response);
  dispatch({
    type: USER_LOGIN,
    payload: response.data,
  });
};
