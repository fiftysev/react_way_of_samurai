import React from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
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
      {props.dialogs.map((v) => (
        <DialogsListItem name={v.name} id={v.id} key={v4()} />
      ))}
    </div>
  );
};

export default DialogsList;
