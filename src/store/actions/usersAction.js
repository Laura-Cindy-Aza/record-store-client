// import { helpFetchUsers } from "../helpers";
import { helpAddUser, helpEditUser } from "../helpers";
import { ADD_USER, EDIT_USER } from "./types";

// export const getUsersAction = () => async (dispatch) => {
//   const response = await helpFetchUsers();
//   console.log("respone from UserActions", response);
//   dispatch({
//     type: GET_USERS,
//     payload: response.data,
//   });
// };

export const addUserAction = (formData) => async (dispatch) => {
  const response = await helpAddUser(formData);
  dispatch({
    type: ADD_USER,
    payload: response.data,
  });
};

export const editUserAction = (formData) => async (dispatch) => {
  const response = await helpEditUser(formData);
  dispatch({
    type: EDIT_USER,
    payload: response.data,
  });
};
