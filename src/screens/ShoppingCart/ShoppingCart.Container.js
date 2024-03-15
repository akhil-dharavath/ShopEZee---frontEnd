import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  fetchCart,
  getCart,
  handleRemoveFromCart,
  getRemoveFromCart,
  getRemoveFromCartFailure,
} from "../../redux/reducers/homeReducer";
import Component from "./ShoppingCart.Component";

const mapStateToProps = createStructuredSelector({
  cart: getCart,
  removeFromCart: getRemoveFromCart,
  removeFromCartFailure: getRemoveFromCartFailure,
});

const mapDispatchToProps = {
  fetchCart,
  handleRemoveFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
