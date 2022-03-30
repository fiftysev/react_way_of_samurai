import React from "react";
import s from "./profile.module.css";

const ProfileInfo = ({ user }) => {
  if (user) {
    return (
      <div className={s.wrapper}>
        <div className={s.profile}>
          <img
            src={"https://source.unsplash.com/random/128x128"}
            alt="avatar"
            className={s.avatar}
          />
          <div className={s.info}>
            <p className={s.info__text}>{user.fullName}</p>
            <p className={s.info__text}>
              {user.lookingForAJob && "Ищу работу"}
            </p>
            <p className={s.info__text}>{user.lookingForAJobDescription}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={s.wrapper}>
        <div className={s.profile}>
          <img
            src={"https://source.unsplash.com/random/128x128"}
            alt="avatar"
            className={s.avatar}
          />
          <div className={s.info}>
            <p className={s.info__text}>Janet Weaver</p>
            <p className={s.info__text}>janet.weaver@reqres.in</p>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
