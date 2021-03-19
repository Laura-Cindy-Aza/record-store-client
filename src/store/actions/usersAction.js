export const getUsersAction = () => {
    return {
        type: 'GET_USERS'
    }
}

export const addUserAction = (formData) => {
    return {
        type: 'ADD_USER',
        payload: formData
    }
}