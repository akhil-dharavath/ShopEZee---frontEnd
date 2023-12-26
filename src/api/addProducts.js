import axios from "axios";

const addProducts = async (data,categories) => {
  const authtoken = localStorage.getItem("token");
  const name = data["Product Name"];
  const description = data["Product Description"];
  const image = data["Image url"];
  const price = Number(data["Price"]);
  const stock = Number(data["Stock"]);
  const category = categories[data["Category"]].name;
  const subCategory = categories[data["Category"]].description[data["Sub category"]];

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

export default addProducts;
