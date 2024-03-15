import axios from "axios";
import { authtoken } from "./_constants";

export const deleteAccountApi = async () => {
    const response = await axios({
      headers: { "content-type": "application/json", authtoken },
      method: "DELETE",
      url: `${process.env.REACT_APP_URL}/users`,
    });
    return response.data;
  };
  
export const getUserApi = async () => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/users`,
  });
  return response.data;
};

export const updateUserApi = async (data) => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "POST",
    url: `${process.env.REACT_APP_URL}/users`,
    data: JSON.stringify(data),
  });
  return response.data;
};