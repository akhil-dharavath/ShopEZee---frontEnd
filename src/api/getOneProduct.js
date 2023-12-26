import axios from "axios";

const getOneProduct = async ({ id }) => {
  const { data } = await axios({
    headers: { "content-type": "application/json" },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/products/${id}`,
  });
  return data;
};
export default getOneProduct;
