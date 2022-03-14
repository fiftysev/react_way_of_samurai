import React from "react";
import { NavLink } from "react-router-dom";
import s from "./dialogs_list.module.css";

const DialogsListItem = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`} className={s.item}>
      {" "}
      <img src="https://source.unsplash.com/random/60x60" alt="" />
      {props.name || "User"}
    </NavLink>
  );
};

const DialogsList = (props) => {
  return (
    <div className={s.container}>
      <DialogsListItem name="Egor" id={1} />
      <DialogsListItem name="Zhenya" id={2} />
      <DialogsListItem name="Сэмчик" id={3} />
    </div>
  );
};

export default DialogsList;
