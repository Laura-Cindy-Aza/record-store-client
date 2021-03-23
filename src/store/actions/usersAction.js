// import { helpFetchUsers } from "../helpers";
import { helpAddUser } from "../helpers";
import { ADD_USER } from "./types";

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
