import React from "react";
import { NavLink } from "react-router-dom";
import s from "./dialogs_list.module.css";

const DialogsListItem = (props) => {
  return (
    <div className={s.item}>
      <img src="https://source.unsplash.com/random/60x60" alt="" />
      <NavLink to="/dialogs">{props.name || "User"}</NavLink>
    </div>
  );
};

const DialogsList = (props) => {
  return (
    <div className={s.container}>
      <DialogsListItem name="Egor" />
      <DialogsListItem name="Zhenya" />
      <DialogsListItem name="Сэмчик" />
    </div>
  );
};

export default DialogsList;
