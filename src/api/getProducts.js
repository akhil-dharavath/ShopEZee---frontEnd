import axios from "axios";

const getProducts = async () => {
  const { data } = await axios({
    headers: { "content-type": "application/json" },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/products`
  });
  return data;
};
export default getProducts