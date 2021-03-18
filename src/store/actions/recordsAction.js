import { helpFetchRecords } from "../helpers/index";

export const getRecordsAction = () => async (dispatch) => {
  const response = await helpFetchRecords();
  console.log("respone from Actions", response);
  dispatch({
    type: "GET_RECORDS",
    payload: response.data,
  });
};
