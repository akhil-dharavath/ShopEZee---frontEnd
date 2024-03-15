import axios from "axios";
import { authtoken } from "./_constants";

export const postReviewApi = async (review, id) => {
    const response = await axios({
      headers: { "content-type": "application/json", authtoken },
      method: "POST",
      url: `${process.env.REACT_APP_URL}/products/${id}/reviews`,
      data: JSON.stringify(review),
    });
    return response.data;
  };

export const getReviewsApi = async (id) => {
    const response = await axios({
      headers: { "content-type": "application/json" },
      method: "GET",
      url: `${process.env.REACT_APP_URL}/products/${id}/reviews`,
    });
    return response.data;
  };