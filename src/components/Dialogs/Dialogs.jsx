import React from "react";
import s from "./dialogs.module.css";
import DialogsList from "./List/DialogsList";
import DialogContainer from "./Dialog/DialogContainer";

const Dialogs = (props) => {
  const dialogsList = props.store.getState().dialogsPage.dialogs;
  return (
    <div className={s.container}>
      <DialogsList dialogs={dialogsList} />
      <DialogContainer store={props.store} />
    </div>
  );
};

export default Dialogs;
