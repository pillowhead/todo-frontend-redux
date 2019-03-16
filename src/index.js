import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

// to see current state or our store
store.subscribe(() => console.log("store", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
