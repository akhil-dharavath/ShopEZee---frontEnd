import axios from "axios";

const getCart = async () => {
    const authtoken = localStorage.getItem("token")
    const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/cart/get-cart`,
  });
  return response.data;
};

export default getCart;
