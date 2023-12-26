import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Component from "./Orders.Component";
import {
  handleGetOrders,
  getorders,
  getUserOrders,
  fetchUserOrders,
} from "../../redux/reducers/homeReducer";

const mapStateToProps = createStructuredSelector({
  orders: getorders,
  userOrders: getUserOrders,
});

const mapDispatchToProps = {
  handleGetOrders,
  fetchUserOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
