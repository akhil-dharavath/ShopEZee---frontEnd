import axios from "axios";

const placeOrder = async (quantity, product) => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken, product },
    method: "POST",
    url: `${process.env.REACT_APP_URL}/orders`,
    data: JSON.stringify({ quantity }),
  });
  return response.data;
};

export default placeOrder;
