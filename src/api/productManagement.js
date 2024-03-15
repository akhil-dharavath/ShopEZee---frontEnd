import axios from "axios";
// import { authtoken } from "./_constants";

// createProduct ==> which is in adminFeatures
export const getOneProductApi = async ({ id }) => {
  const { data } = await axios({
    headers: { "content-type": "application/json" },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/products/${id}`,
  });
  return data;
};

export const getProductsApi = async () => {
  const { data } = await axios({
    headers: { "content-type": "application/json" },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/products`,
  });
  return data;
};

// updateOneProduct
export const updateOneProductApi = async()=>{

}
// deleteOneProduct
export const deleteOneProductApi = async()=>{

}