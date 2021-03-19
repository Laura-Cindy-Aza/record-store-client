const authenticationReducer = (authentication = false, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            authentication = true
            return "user";
        default:
            return false;
    }
};
export default authenticationReducer;