import axios from "axios";

const updateUser = async (data) => {
  // console.log(data);
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "POST",
    url: `${process.env.REACT_APP_URL}/users`,
    data: JSON.stringify(data),
  });
  return response.data;
};

export default updateUser;
