import React from "react";
import Dialog from "./Dialog/Dialog";
import s from "./dialogs.module.css";
import DialogsList from "./List/DialogsList";

const Dialogs = (props) => {
  return (
    <div className={s.container}>
      <DialogsList dialogs={props.state.dialogs} />
      <Dialog messages={props.state.messages} />
    </div>
  );
};

export default Dialogs;
