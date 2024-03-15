import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
// import logger from "redux-logger";

const combineReducers = rootReducer();

const store = configureStore({
  reducer: combineReducers,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers/index', () => store.replaceReducer(combineReducers))
}

export default store
