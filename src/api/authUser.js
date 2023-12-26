import axios from "axios";

const registerUser = async (data,address) => {
  const response = await axios({
    headers: { "content-type": "application/json" },
    method: "POST",
    url: `${process.env.REACT_APP_URL}/users/${address}`,
    data: JSON.stringify(data),
  });
  return response;
};

export default registerUser;
