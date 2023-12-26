import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Component from "./ContactUs.Component";
import { handleContactUs } from "../../redux/reducers/homeReducer";

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  handleContactUs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
