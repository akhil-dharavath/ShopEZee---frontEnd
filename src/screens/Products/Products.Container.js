import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  fetchProducts,
  getProducts,
  getProductsLoading,
  getSearchCategory,
} from "../../redux/reducers/homeReducer";
import Component from "./Products.Component";

const mapStateToProps = createStructuredSelector({
  products: getProducts,
  productsLoading: getProductsLoading,
  searchCategory:getSearchCategory
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
