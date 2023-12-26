import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Component from "./ViewProfile.Component";
import {
  getLogin,
  getLoginLoading,
  getLoginFailure,
  handleLogin,
  setLogin,
  handleAddCategory,
  handleDeleteAccount,
  handleAddProduct,
  fetchProducts,
  getCategories,
  fetchCategories,
  handleGetUser,
  handleUpdateUser,
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
  handleAddCategory,
  handleDeleteAccount,
  handleAddProduct,
  fetchProducts,
  fetchCategories,
  handleGetUser,
  handleUpdateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
