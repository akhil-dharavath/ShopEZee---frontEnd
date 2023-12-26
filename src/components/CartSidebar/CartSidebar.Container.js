import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  fetchCart,
  getCart,
  handleRemoveFromCart,
} from "../../redux/reducers/homeReducer";
import Component from "./CartSidebar.Component";

const mapStateToProps = createStructuredSelector({
  cart: getCart,
});

const mapDispatchToProps = {
  fetchCart,
  handleRemoveFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
