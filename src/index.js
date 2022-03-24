import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

export const runTreeRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

runTreeRender(store.getState());

store.subscribe(() => runTreeRender(store.getState()));
