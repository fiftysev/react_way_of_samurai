import { store } from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const runTreeRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

runTreeRender(store.state);

store.subscribe(runTreeRender);
