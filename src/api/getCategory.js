import axios from "axios";

const getCategory = async () => {
    const response = await axios({
    headers: { "content-type": "application/json" },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/filters/categories`,
  });
  return response.data;
};

export default getCategory;
