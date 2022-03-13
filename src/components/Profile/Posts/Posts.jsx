import React from "react";
import Post from "./Post/Post";
import s from "./posts.module.css";

const Posts = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>My posts</h2>
      <div className={s.post__form}>
        <textarea
          className={s.form__input}
          name="postText"
          id="create_post"
          cols="20"
          rows="2"
        />
        <button className={s.form__button}>Add post</button>
      </div>
      <Post />
    </div>
  );
};

export default Posts;
