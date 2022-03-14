import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const dialogs = [
  {
    id: 1,
    name: "Egor",
  },
  {
    id: 2,
    name: "Zhenya",
  },
  {
    id: 3,
    name: "Сэмчик",
  },
];

const messages = [
  {
    message: "Test",
  },
  {
    message: "Test",
    alignRight: true,
  },
  {
    message: "Test",
  },
  {
    message: "Test",
    alignRight: true,
  },
  {
    message: "Test",
  },
  {
    message: "Test",
  },
  {
    message: "Test",
  },
  {
    message: "Test",
  },
  {
    message: "Test",
    alignRight: true,
  },
  {
    message: "Test",
    alignRight: true,
  },
];

const posts = [
  {
    text: "My first post!",
  },
  {
    text: "It's props lesson from React course",
    likes: 424,
  },
  {
    text: "It's props lesson from React course",
    likes: 424,
  },
  {
    text: "It's props lesson from React course",
    likes: 424,
  },
  {
    text: "My first post!",
  },
  {
    text: "My first post!",
    likes: 32,
  },
  {
    text: "My first post!",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
