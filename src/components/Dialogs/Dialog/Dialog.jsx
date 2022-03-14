import React from "react";
import s from "./dialog.module.css";

const DialogMessage = (props) => {
  return (
    <p className={`${s.message} ${props.alignRight ? s.align_right : ""}`}>
      {props.message || "undefined text"}
    </p>
  );
};

const Dialog = () => {
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

  return (
    <div className={s.container}>
      {messages.map((v) => (
        <DialogMessage message={v.message} alignRight={v?.alignRight} />
      ))}
    </div>
  );
};

export default Dialog;
