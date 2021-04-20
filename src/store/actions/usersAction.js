// import { helpFetchUsers } from "../helpers";
import {
  helpAddUser,
  helpEditUser,
  helpCheckUSer,
  helpCheckoutUser,
} from "../helpers";
import { ADD_USER, EDIT_USER, USER_LOGIN, USER_LOGOUT } from "./types";

export const addUserAction = (formData) => async (dispatch) => {
  const response = await helpAddUser(formData);
  dispatch({
    type: ADD_USER,
    payload: response.data,
  });
};

export const editUserAction = (formData) => async (dispatch, getState) => {
  const userId = getState().user.user._id;

  const response = await helpEditUser(userId, formData);
  console.log("formData from Action");
  dispatch({
    type: EDIT_USER,
    payload: response.data,
  });
};

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
