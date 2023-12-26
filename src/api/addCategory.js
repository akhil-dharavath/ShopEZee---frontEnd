import axios from "axios";

const addToCart = async (name,description) => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "POST",
    url: `${process.env.REACT_APP_URL}/admin/create-category`,
    data: JSON.stringify({name,description}),
  });
  return response.data;
};

export default addToCart;
