import React from "react";
import s from "./user_card.module.css";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BsChatTextFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import axios from "axios";

const UserCard = ({ user, ...actions }) => {
  const avatarSrc = user.photos.small ? user.photos.small : "./IMG_4421.JPG";
  const follow = () => {
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
        {},
        {
          withCredentials: true,
          headers: {
            "API-KEY": "43f0c297-2531-4067-973e-a9fefbbb5845",
          },
        }
      )
      .then((res) => {
        if (res.data.resultCode === 0) {
          actions.follow(user.id);
        }
      });
  };

  const unfollow = () => {
    axios
      .delete(
        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
        {
          withCredentials: true,
          headers: {
            "API-KEY": "43f0c297-2531-4067-973e-a9fefbbb5845",
          },
        }
      )
      .then((res) => {
        if (res.data.resultCode === 0) {
          actions.unfollow(user.id);
        }
      });
  };

  return (
    <div className={s.container}>
      <img src={avatarSrc} alt="avatar" className={s.avatar} />
      <NavLink className={s.text + " " + s.name} to={`/profile/${user.id}`}>
        {user.name}
      </NavLink>
      {user.address && (
        <p className={s.text}>
          <SiHomeassistantcommunitystore />
          {user.address.city}, {user.address.country}
        </p>
      )}
      <p className={s.text}>
        <BsChatTextFill /> {user.status || "React Status"}
      </p>
      {user.uniqueUrlName && <p className={s.text}>@{user.uniqueUrlName}</p>}
      {!user.followed && (
        <button className={s.follow_btn} type="button" onClick={follow}>
          Follow
        </button>
      )}
      {user.followed && (
        <button
          className={s.unfollow_btn}
          type="button"
          onClick={() => unfollow(user.id)}>
          Unfollow
        </button>
      )}
    </div>
  );
};

export default UserCard;
