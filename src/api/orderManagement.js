import axios from "axios";
import { authtoken } from "./_constants";

export const userOrdersApi = async () => {
    // const authtoken = localStorage.getItem("token");
    const response = await axios({
      headers: { "content-type": "application/json", authtoken },
      method: "GET",
      url: `${process.env.REACT_APP_URL}/admin/orders`,
    });
    return response.data;
  };

export const placeOrderApi = async (quantity, product) => {
    // const authtoken = localStorage.getItem("token");
    const response = await axios({
      headers: { "content-type": "application/json", authtoken, product },
      method: "POST",
      url: `${process.env.REACT_APP_URL}/orders`,
      data: JSON.stringify({ quantity }),
    });
    return response.data;
  };

  export const getOneOrderApi = async()=>{

  }

  export const deleteOneOrderApi = async()=>{

  }