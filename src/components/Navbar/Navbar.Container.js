import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  handleGetUser,
  getUserDetails,
} from "../../redux/reducers/homeReducer";
import Component from "./Navbar.Component";

const mapStateToProps = createStructuredSelector({
  userDetails: getUserDetails,
});

const mapDispatchToProps = {
  handleGetUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
