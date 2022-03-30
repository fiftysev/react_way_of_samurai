import React from "react";
import s from "./user_card.module.css";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BsChatTextFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const UserCard = ({ user, follow, unfollow }) => {
  const avatarSrc = user.photos.small ? user.photos.small : "./IMG_4421.JPG";
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
        <button
          className={s.follow_btn}
          type="button"
          onClick={() => follow(user.id)}>
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
