import React from "react";
import s from "./user_card.module.css";

const UserCard = ({ user, follow, unfollow }) => {
  return (
    <div className={s.container}>
      <img src="./IMG_4421.JPG" alt="avatar" className={s.avatar} />
      <p className={s.text}>
        {user.first_name} {user.last_name}
      </p>
      <p className={s.text}>
        {user.address.city}, {user.address.country}
      </p>
      <p className={s.text}>{user.status}</p>
      <p className={s.text}>@{user.username}</p>
      {!user.followed && (
        <button
          className={s.follow_btn}
          type="button"
          onClick={() => follow(user.id)}>
          Подписаться
        </button>
      )}
      {user.followed && (
        <button
          className={s.unfollow_btn}
          type="button"
          onClick={() => unfollow(user.id)}>
          Отписаться
        </button>
      )}
    </div>
  );
};

export default UserCard;
