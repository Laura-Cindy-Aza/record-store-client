export const userLogin = (username) => {
    return {
        type: "USER_LOGIN",
        payload: username
    }
};