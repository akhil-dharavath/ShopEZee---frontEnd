import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./homeReducer";

const reducers = () =>
  combineReducers({
    home: homeReducer,
  });
export default reducers;
