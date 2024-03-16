import axios from "axios";
import { authtoken } from "./_constants";

export const addCategoryApi = async (name, description) => {
  //   const authtoken=getAuthtoken()
  try {
    const response = await axios({
      headers: { "content-type": "application/json", authtoken },
      method: "POST",
      url: `${process.env.REACT_APP_URL}/admin/create-category`,
      data: JSON.stringify({ name, description }),
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const addProductApi = async (data, categories) => {
  //   const authtoken = getAuthtoken()
  const name = data["Product Name"];
  const description = data["Product Description"];
  const image = data["Image url"];
  const price = Number(data["Price"]);
  const stock = Number(data["Stock"]);
  const category = categories[data["Category"]].name;
  const subCategory =
    categories[data["Category"]].description[data["Sub category"]];

  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "POST",
    url: `${process.env.REACT_APP_URL}/admin/create-product`,
    data: JSON.stringify({
      name,
      description,
      price,
      category,
      stock,
      image,
      subCategory,
    }),
  });
  return response.data;
};

export const getOrdersApi = async () => {
  // const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/orders`,
  });
  return response.data;
};

export const updateOrderApi = async (id, status) => {
  try {
    const response = await axios({
      headers: { "content-type": "application/json", authtoken },
      method: "PUT",
      url: `${process.env.REACT_APP_URL}/admin/update-order/${id}`,
      data: JSON.stringify({ status }),
    });
    return response;
  } catch (error) {
    return error;
  }
};
