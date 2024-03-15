import axios from "axios";
// import { authtoken } from "./_constants";

export const getCategoryApi = async () => {
    const response = await axios({
    headers: { "content-type": "application/json" },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/filters/categories`,
  });
  return response.data;
};