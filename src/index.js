import React, { Suspense } from "react";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner";
import store from "./redux/store";
import App from "./App";
=======
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
import App from "./App";
// import store from './redux/store';
import Spinner from "./components/Spinner";
>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Suspense fallbackElement={<Spinner />}>
<<<<<<< HEAD
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
=======
    {/* <Provider store={store}> */}
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
    {/* </Provider> */}
>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963
  </Suspense>
);
