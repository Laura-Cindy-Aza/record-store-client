import { USER_LOGIN } from "./types";

export const userLogin = (username) => {
  return {
    type: USER_LOGIN,
    payload: username,
  };
};
