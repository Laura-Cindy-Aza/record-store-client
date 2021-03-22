// import { helpFetchUsers } from "../helpers";
import { GET_USERS, ADD_USER } from "./types";

// export const getUsersAction = () => async (dispatch) => {
//   const response = await helpFetchUsers();
//   console.log("respone from UserActions", response);
//   dispatch({
//     type: GET_USERS,
//     payload: response.data,
//   });
// };

export const addUserAction = (formData) => {
  return {
    type: ADD_USER,
    payload: formData,
  };
};
