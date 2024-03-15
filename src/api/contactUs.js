import axios from "axios";
// import { authtoken } from "./_constants";

export const contactUsApi = async (data) => {
  const response = await axios({
    headers: { "content-type": "application/json" },
    method: "POST",
    url: `${process.env.REACT_APP_URL}/contact-us`,
    data: JSON.stringify(data),
  });
  return response.data;
};

