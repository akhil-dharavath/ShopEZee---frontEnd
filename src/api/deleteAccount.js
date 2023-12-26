import axios from "axios";

const deleteAccount = async () => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "DELETE",
    url: `${process.env.REACT_APP_URL}/users`,
  });
  return response.data;
};

export default deleteAccount;
