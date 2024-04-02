import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import StgSlice from "./redux/StgSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({reducer : StgSlice})
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
