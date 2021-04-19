import axios from "axios";

// get records from API endpoint

export const helpFetchRecords = () =>
  axios.get("http://localhost:5000/records");

// signup user

export const helpAddUser = (formData) =>
  axios.post("http://localhost:5000/users", formData);

// login user authentication

export const helpCheckUSer = (formData) =>
  axios.post("http://localhost:5000/users/login", formData);

// logout user

export const helpCheckoutUser = () =>
  axios.get("http://localhost:5000/users/logout");

// edit user data

export const helpEditUser = async (userId, updatedUser) =>
  axios.patch(`http://localhost:5000/users/${userId}`, updatedUser);
