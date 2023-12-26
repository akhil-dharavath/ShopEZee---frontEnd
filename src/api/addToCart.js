import axios from "axios";

const addToCart = async (id, quantity) => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken, product: id },
    method: "POST",
    url: `${process.env.REACT_APP_URL}/cart/add-to-cart`,
    data: JSON.stringify({quantity:quantity}),
  });
  return response.data;
};

export default addToCart;
