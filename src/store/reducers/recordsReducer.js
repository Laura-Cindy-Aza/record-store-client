const initialState = {
    records: ["Dark Side of the Moon", "The Wall"]
}
const recordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RECORDS':
            return state
        
        default:
            return state
    }
};

export default recordsReducer;