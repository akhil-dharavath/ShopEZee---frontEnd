import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner";
import store from "./redux/store";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Suspense fallbackElement={<Spinner />}>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>
);
