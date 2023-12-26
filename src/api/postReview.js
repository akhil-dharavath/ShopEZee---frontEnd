import axios from "axios";

const postReview = async (review, id) => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    headers: { "content-type": "application/json", authtoken },
    method: "POST",
    url: `${process.env.REACT_APP_URL}/products/${id}/reviews`,
    data: JSON.stringify(review),
  });
  return response.data;
};

export default postReview;
