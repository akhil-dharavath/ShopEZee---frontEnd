import axios from "axios";

const getOrders = async () => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/orders`,
  });
  return response.data;
};

export default getOrders;
