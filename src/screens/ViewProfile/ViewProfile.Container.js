import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Component from "./ViewProfile.Component";
import {
  getLogin,
  getLoginLoading,
  getLoginFailure,
  handleLogin,
  setLogin,
  handleDeleteAccount,
  handleAddProduct,
  fetchProducts,
  getCategories,
  fetchCategories,
  handleGetUser,
  getUserDetails,
} from "../../redux/reducers/homeReducer";

const mapStateToProps = createStructuredSelector({
  login: getLogin,
  loading: getLoginLoading,
  loginFailure: getLoginFailure,
  getCategories: getCategories,
  getUserDetails: getUserDetails,
});

const mapDispatchToProps = {
  handleLogin,
  setLogin,
  handleDeleteAccount,
  handleAddProduct,
  fetchProducts,
  fetchCategories,
  handleGetUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
