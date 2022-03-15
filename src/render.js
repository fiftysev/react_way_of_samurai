import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const runTreeRender = (state, actions) =>
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} actions={actions} />
    </React.StrictMode>,
    document.getElementById("root")
  );
