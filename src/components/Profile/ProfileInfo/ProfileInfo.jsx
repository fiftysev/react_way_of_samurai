import React from "react";
import s from "./profile.module.css";

const ProfileInfo = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.profile}>
        <img
          src={
            user?.photos.small ?? "http://source.unsplash.com/random/240x240"
          }
          alt="avatar"
          className={s.avatar}
        />
        <div className={s.info}>
          <p className={s.info__text}>{user?.fullName ?? "Janet Weaver"}</p>
          <p className={s.info__text}>{user?.lookingForAJob && "Ищу работу"}</p>
          <p className={s.info__text}>
            {user?.lookingForAJob && user.lookingForAJobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
