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
  return (
    <div className={s.container}>
      <DialogMessage message="Test" alignRight={true} />
      <DialogMessage message="Test" />
      <DialogMessage message="Test" />
      <DialogMessage message="Test" alignRight={true} />
      <DialogMessage message="Test" alignRight={true} />
    </div>
  );
};

export default Dialog;
