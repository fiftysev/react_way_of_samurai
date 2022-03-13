import React from "react";
import s from "./post.module.css";

const Post = () => {
  return (
    <>
      <div className={s.container}>
        <img src="https://source.unsplash.com/random/60x60" alt="" />
        <p className={s.text}>Text of the post</p>
      </div>
    </>
  );
};

export default Post;
