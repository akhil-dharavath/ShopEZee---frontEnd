import axios from "axios";

const addToCart = async (data) => {
  const response = await axios({
    headers: { "content-type": "application/json" },
    method: "POST",
    url: `${process.env.REACT_APP_URL}/contact-us`,
    data: JSON.stringify(data),
  });
  return response.data;
};

export default addToCart;
