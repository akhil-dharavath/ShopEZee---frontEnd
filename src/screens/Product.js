import React, { useState } from "react";
import Login from "../assets/images/login.jpg";
import { Link } from "react-router-dom";
import { Rating, Typography } from "@mui/material";

const Product = () => {
  const [rate, setRate] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRate = () => {
    setRate(!rate);
    console.log(rating);
  };

  return (
    <div className="product">
      <img src={Login} alt="product" />
      <div>
        <h2>Title</h2>
        <h4>Description</h4>
        <h4>Price</h4>
        <Typography className="d-flex justify-content-between">
          <Rating
            name="half-rating"
            defaultValue={0}
            readOnly={rate ? false : true}
            value={parseInt(rating)}
            onChange={(e) => setRating(e.target.value)}
          />
          <button
            onClick={() => handleRate()}
            style={{ width: 150, border: "1px solid black" }}
          >
            {rate ? "save" : "rate product"}
          </button>
          {rate && (
            <button
              onClick={() => setRate(false)}
              style={{ width: 30, border: "1px solid black" }}
            >
              x
            </button>
          )}
        </Typography>
        <Link to="/products" className="product-close-btn">
          X
        </Link>
        <div>
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
