import { helpFetchRecords } from "../helpers/index";

export const getRecordsAction = () => async (dispatch) => {
  const response = await helpFetchRecords();
  console.log("respone from Actions", response);
  dispatch({
    type: "GET_RECORDS",
    payload: response.data,
  });
};

// export const getRecordAction = async () => {
//   const response = await helpFetchRecords();
//   return {
//     type: "GET_RECORDS",
//     payload: response.data,
//   };
// };
