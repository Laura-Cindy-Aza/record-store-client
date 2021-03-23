import axios from "axios";

export const helpFetchRecords = async () => {
  console.log("Helper RECORDS running!!");
  const res = await axios.get("http://localhost:5000/records");
  console.log("res", res);
  return res;
};

export const helpAddUser = async (formData) => {
  const stringifiedData = JSON.stringify(formData);
  console.log("Helper ADD_USER works!");
  const res = await axios.post("http://localhost:5000/users", stringifiedData, {
    headers: { "Content-Type": "application/json" },
  });
  console.log("res", res);

  return res;
};

export const helpCheckUSer = async (formData) => {
  const stringifiedData = JSON.stringify(formData);

  const res = await axios.post(
    "http://localhost:5000/users/login",
    stringifiedData,
    { headers: { "Content-Type": "application/json" } }
  );

  console.log("res", res);

  return res;
};
