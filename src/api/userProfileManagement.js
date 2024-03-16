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
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/users`,
  });
  return response.data;
};

export const updateUserApi = async (data) => {
  const {
    Email: email,
    Username: username,
    "Current password": oldpassword,
    Password: password,
  } = data;
  try {
    const response = await axios({
      headers: { "content-type": "application/json", authtoken },
      method: "PUT",
      url: `${process.env.REACT_APP_URL}/users`,
      data: JSON.stringify({ email, username, password, oldpassword }),
    });
    return response;
  } catch (error) {
    return error;
  }
};
