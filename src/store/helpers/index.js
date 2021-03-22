import axios from "axios";

export const helpFetchRecords = async () => {
  console.log("Helper RECORDS running!!");
  const res = await axios.get("http://localhost:5000/records");
  console.log("res", res);
  return res;
};

// export const helpFetchUsers = async () => {
//   console.log("Helper USER works!");
//   const res = await axios.get("http://localhost:5000/users");
//   console.log("res", res);

//   return res;
// };

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
