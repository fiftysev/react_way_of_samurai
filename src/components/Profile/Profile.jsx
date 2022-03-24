import React from "react";
import s from "./profile.module.css";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <>
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
      <PostsContainer />
    </>
  );
};

export default Profile;
