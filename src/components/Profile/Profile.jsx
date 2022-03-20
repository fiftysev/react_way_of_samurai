import React from "react";
import Posts from "./Posts/Posts";
import s from "./profile.module.css";

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
      <Posts
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        addPost={props.actions.addPost}
        updateNewPostText={props.actions.updateNewPostText}
      />
    </>
  );
};

export default Profile;
