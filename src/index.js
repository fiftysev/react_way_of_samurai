import { state, subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const runTreeRender = (state) =>
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>,
    document.getElementById("root")
  );

runTreeRender(state);

subscribe(runTreeRender);
