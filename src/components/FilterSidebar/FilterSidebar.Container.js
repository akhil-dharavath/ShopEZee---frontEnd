import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  fetchCategories,
  getCategories,
  setSearchCategory,
  getSearchCategory
} from "../../redux/reducers/homeReducer";
import Component from "./FilterSidebar.Component";

const mapStateToProps = createStructuredSelector({
  categories: getCategories,
  searchCategory: getSearchCategory
});

const mapDispatchToProps = {
  fetchCategories,
  setSearchCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
