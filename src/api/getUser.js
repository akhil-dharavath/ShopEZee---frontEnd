import axios from "axios";

const getUser = async () => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/users`,
  });
  return response.data;
};

export default getUser;
