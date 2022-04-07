import React, { useState } from "react";
import s from "./user_card.module.css";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BsChatTextFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { UserService } from "../../../api/services/userService";

const UserCard = ({ user, ...actions }) => {
  const [inFollowingProgress, setFollowingProgress] = useState(false);

  const avatarSrc = user.photos.small ? user.photos.small : "./IMG_4421.JPG";

  const follow = () => {
    setFollowingProgress(!inFollowingProgress);
    UserService.follow(user.id).then((data) => {
      if (data.resultCode === 0) {
        actions.follow(user.id);
      }
    });
    setFollowingProgress(!inFollowingProgress);
  };

  const unfollow = () => {
    setFollowingProgress(!inFollowingProgress);
    UserService.unfollow(user.id).then((data) => {
      if (data.resultCode === 0) {
        actions.unfollow(user.id);
      }
    });
    setFollowingProgress(!inFollowingProgress);
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

      <button
        className={user.followed ? s.unfollow_btn : s.follow_btn}
        type="button"
        onClick={user.followed ? unfollow : follow}
        disabled={inFollowingProgress}>
        {user.followed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
