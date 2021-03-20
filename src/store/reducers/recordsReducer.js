import { GET_RECORDS } from "../actions/types";

const initialState = {
  records: [],
};
const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECORDS:
      return {
        ...state,
        records: action.payload,
      };

    default:
      return state;
  }
};

export default recordsReducer;
