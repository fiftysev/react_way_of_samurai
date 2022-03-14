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
  const dialogItems = [
    {
      id: 1,
      name: "Egor",
    },
    {
      id: 2,
      name: "Zhenya",
    },
    {
      id: 3,
      name: "Сэмчик",
    },
  ];

  return (
    <div className={s.container}>
      {dialogItems.map((v) => (
        <DialogsListItem name={v.name} id={v.id} key={v.id} />
      ))}
    </div>
  );
};

export default DialogsList;
