import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  fetchProducts,
  getProducts,
  getProductsLoading,
  handleGetUser
} from "../../redux/reducers/homeReducer";
import Component from "./HomePage.Component";

const mapStateToProps = createStructuredSelector({
  products: getProducts,
  productsLoading: getProductsLoading,
});

const mapDispatchToProps = {
  fetchProducts,
  handleGetUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
