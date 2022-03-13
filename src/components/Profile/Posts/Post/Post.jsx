import React from "react";
import s from "./post.module.css";

const Post = (props) => {
  const { text, likes } = props;
  return (
    <>
      <div className={s.container}>
        <img src="https://source.unsplash.com/random/60x60" alt="" />
        <p className={s.text}>{text}</p>
        {likes && <p className={s.text}>Likes count: {likes}</p>}
      </div>
    </>
  );
};

export default Post;
