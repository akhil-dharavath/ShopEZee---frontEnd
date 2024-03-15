import axios from "axios";

export const authUserApi = async (data, address) => {
  try {
    const response = await axios({
      headers: { "content-type": "application/json" },
      method: "POST",
      url: `${process.env.REACT_APP_URL}/users/${address}`,
      data: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    return error;
  }
};
