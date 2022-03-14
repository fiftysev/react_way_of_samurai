import React from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import s from "./friends_block.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const FriendItem = (props) => {
  return (
    <NavLink to="/profile" className={s.item}>
      <img src="https://source.unsplash.com/random/60x60" alt="" />
      <p>{props.name}</p>
    </NavLink>
  );
};

const FriendsBlock = (props) => {
  return (
    <>
      <NavLink
        to="/friends"
        className={(navData) => (navData.isActive ? s.active : "")}>
        Friends
      </NavLink>
      <div className={s.container} id="friends">
        {props.friends.map((v) => (
          <FriendItem name={v.name} key={v4()} />
        ))}
      </div>
      <div className={s.btn__group}>
        <button
          className={s.btn}
          onClick={() => {
            let el = document.getElementById("friends");
            el.scrollLeft -= el.querySelector("a").offsetWidth * 2;
          }}>
          <AiOutlineArrowLeft />
        </button>
        <button
          className={s.btn}
          onClick={() => {
            let el = document.getElementById("friends");
            el.scrollLeft += el.querySelector("a").offsetWidth * 2;
          }}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
};

export default FriendsBlock;
