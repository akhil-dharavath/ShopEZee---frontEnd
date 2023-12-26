import axios from "axios";

const userOrders = async () => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/admin/orders`,
  });
  return response.data;
};

export default userOrders;
