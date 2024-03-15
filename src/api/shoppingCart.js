import axios from "axios";
import { authtoken } from "./_constants";

export const addToCartApi = async (id, quantity) => {
  const response = await axios({
    headers: { "content-type": "application/json", authtoken, product: id },
    method: "POST",
    url: `${process.env.REACT_APP_URL}/cart/add-to-cart`,
    data: JSON.stringify({ quantity: quantity }),
  });
  return response;
};

export const getCartApi = async () => {
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/cart/get-cart`,
  });
  return response.data;
};

export const removeFromCartApi = async (id) => {
  const response = await axios({
    headers: { "content-type": "application/json", authtoken, product: id },
    method: "DELETE",
    url: `${process.env.REACT_APP_URL}/cart/remove-from-cart`,
  });
  return response.data;
};

export const updateCartApi = async (id, quantity) => {
  try {
    const response = await axios({
      headers: { "content-type": "application/json", authtoken, product: id },
      method: "PUT",
      url: `${process.env.REACT_APP_URL}/cart/update-cart`,
      data: JSON.stringify({ quantity }),
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
