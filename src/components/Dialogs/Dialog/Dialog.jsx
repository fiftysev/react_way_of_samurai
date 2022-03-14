import React from "react";
import s from "./dialog.module.css";

const DialogMessage = (props) => {
  return (
    <p className={`${s.message} ${props.alignRight ? s.align_right : ""}`}>
      {props.message || "undefined text"}
    </p>
  );
};

const Dialog = (props) => {
  return (
    <div className={s.container}>
      {props.messages.map((v) => (
        <DialogMessage message={v.message} alignRight={v?.alignRight} />
      ))}
    </div>
  );
};

export default Dialog;
