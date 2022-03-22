import { store } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const runTreeRender = (state) => {
  let actions = {
    addPost: store.addPost.bind(store),
    updateNewPostText: store.updateNewPostText.bind(store),
    updateNewMessageText: store.updateNewMessageText.bind(store),
    sendNewMessage: store.sendNewMessage.bind(store),
  };
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} actions={actions} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

runTreeRender(store.state);

store.subscribe(runTreeRender);
