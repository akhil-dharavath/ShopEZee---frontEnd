import axios from "axios";

const removeFromCart = async (id) => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken, product: id },
    method: "DELETE",
    url: `${process.env.REACT_APP_URL}/cart/remove-from-cart`,
  });
  return response.data;
};

export default removeFromCart;
