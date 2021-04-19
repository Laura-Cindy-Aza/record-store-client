import { helpFetchRecords } from "../helpers/index";
import { GET_RECORDS } from "./types";

export const getRecordsAction = () => async (dispatch) => {
  const response = await helpFetchRecords();
  console.log("response from Actions", response);
  dispatch({
    type: GET_RECORDS,
    payload: response.data,
  });
};
