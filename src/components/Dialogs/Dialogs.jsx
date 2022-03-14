import React from "react";
import Dialog from "./Dialog/Dialog";
import s from "./dialogs.module.css";
import DialogsList from "./List/DialogsList";

const Dialogs = () => {
  return (
    <div className={s.container}>
      <DialogsList />
      <Dialog />
    </div>
  );
};

export default Dialogs;
