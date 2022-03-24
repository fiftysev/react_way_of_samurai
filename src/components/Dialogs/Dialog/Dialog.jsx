import React from "react";
import s from "./dialog.module.css";
import { v4 } from "uuid";

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
        <DialogMessage
          message={v.message}
          alignRight={v?.alignRight}
          key={v4()}
        />
      ))}
      <div className={s.input_group}>
        <textarea
          className={s.text_input}
          cols={20}
          rows={3}
          value={props.newMessageText}
          onChange={(e) => props.onMessageTextChange(e.target.value)}
        />
        <button className={s.btn} onClick={props.sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialog;
