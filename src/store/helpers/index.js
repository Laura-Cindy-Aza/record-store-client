import axios from "axios";

export const helpFetchRecords = async () => {
  console.log("Helper func running!!");
  const res = await axios.get("http://localhost:5000/records");
  console.log("res", res);
  return res;
};

export const helpFetchUser = async () => {
  console.log("Helper USER works!");
  const res = await axios.get("https://localhost:5000/users")
}
