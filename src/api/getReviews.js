import axios from "axios";

const getReviews = async (id) => {
  const response = await axios({
    headers: { "content-type": "application/json" },
    method: "GET",
    url: `${process.env.REACT_APP_URL}/products/${id}/reviews`,
  });
  return response.data;
};

export default getReviews;
