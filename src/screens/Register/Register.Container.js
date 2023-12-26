import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Component from "./Register.Component";
import {
  getLogin,
  getLoginLoading,
  getLoginFailure,
  handleLogin,
} from "../../redux/reducers/homeReducer";

const mapStateToProps = createStructuredSelector({
  login: getLogin,
  loading: getLoginLoading,
  loginFailure: getLoginFailure,
});

const mapDispatchToProps = {
  handleLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
