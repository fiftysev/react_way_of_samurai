import React from "react";
import s from "./dialogs.module.css";
import DialogContainer from "./Dialog/DialogContainer";
import DialogsListContainer from "./List/DialogsListContainer";

const Dialogs = (props) => {
  return (
    <div className={s.container}>
      <DialogsListContainer />
      <DialogContainer />
    </div>
  );
};

export default Dialogs;
