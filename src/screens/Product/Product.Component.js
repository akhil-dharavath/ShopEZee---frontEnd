import { useEffect, useState } from "react";
import "../../assets/styles/Product.css";
import { useLocation, useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import Spinner from "../../components/Spinner";

function ProductPage({
  fetchOneProduct,
  product,
  productLoading,
  handleAddToCart,
  fetchCart,
  handlePlaceOrder,
  handleGetOrders,
  handlePostReview,
  handleGetReviews,
  review: productReview,
}) {
  const [rate, setRate] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [prodRating, setProdRating] = useState(0);
  const [qty, setQty] = useState(1);
  const location = useLocation();
  const path = location.pathname.slice(10);
  const id = useParams();
  useEffect(() => {
    setProdRating(
      productReview.reduce((acc, rating) => {
        return acc + rating.rating;
      }, 0)
    );
  }, [productReview]);

  useEffect(() => {
    fetchOneProduct(id);
    handleGetReviews(path);
    // eslint-disable-next-line
  }, []);

  const addToCart = async (id, qty) => {
    await handleAddToCart(id, qty);
    await fetchCart();
  };

  const placeOrder = async (qty, id) => {
    await handlePlaceOrder(qty, id);
    await handleGetOrders();
  };

  const postReview = async () => {
    const Review = { rating, review };
    await handlePostReview(Review, path);
    await handleGetReviews(path);
    setRate(false);
  };

  if (productLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{product.name}</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={product.image} alt="product" />
              </div>
            </div>
            <div className="product-right">
              <p className="product-spec">{product.description}</p>
              <Typography>
                <Rating
                  value={prodRating / productReview.length}
                  onClick={() => setRate(true)}
                  onChange={(e) => setRating(Number(e.target.value))}
                />
              </Typography>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={() => setQty(qty - 1)}>-</button>
                  <p className="quantity">{qty}</p>
                  <button onClick={() => setQty(qty + 1)}>+</button>
                </div>
                <p className="product-price">{product.price}.00$</p>
              </div>
              <div className="atc-buy">
                <button
                  onClick={() => {
                    addToCart(product._id, qty);
                  }}
                  className="atc-btn"
                >
                  add to cart
                </button>
                <button
                  onClick={() => {
                    placeOrder(qty, product._id);
                  }}
                  className="buy-btn"
                >
                  buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={rate} fullWidth maxWidth="sm">
        <DialogTitle>Rate the Product</DialogTitle>
        <DialogContent>
          <Rating
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
          <div className="mb-3">
            <label htmlFor="category" className="form-label m-0">
              Review
            </label>
            <br />
            <TextField
              fullWidth
              hiddenLabel
              size="small"
              name="category"
              id="category"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions className="mx-3 mb-3">
          <Button
            variant="contained"
            color="error"
            onClick={() => setRate(false)}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => postReview()}
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProductPage;
