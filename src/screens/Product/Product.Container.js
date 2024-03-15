import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Component from "./Product.Component";
import {
  fetchOneProduct,
  getOneProduct,
  getOneProductLoading,
  getOneProductFailure,
  handleAddToCart,
  fetchCart,
  handleAddProduct,
  fetchProducts,
  handlePlaceOrder,
  handleGetOrders,
  handlePostReview,
  handleGetReviews,
  getReviews,
  getAddToCart,
  getAddToCartFailure
} from "../../redux/reducers/homeReducer";

const mapStateToProps = createStructuredSelector({
  product: getOneProduct,
  productLoading: getOneProductLoading,
  productFailure: getOneProductFailure,
  review: getReviews,
  addToCart: getAddToCart,
  addToCartFailure:getAddToCartFailure
});

const mapDispatchToProps = {
  fetchOneProduct,
  handleAddToCart,
  fetchCart,
  handleAddProduct,
  fetchProducts,
  handlePlaceOrder,
  handleGetOrders,
  handlePostReview,
  handleGetReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
