import React from "react";
import Post from "./Post/Post";
import s from "./posts.module.css";

const Posts = () => {
  const posts = [
    {
      text: "My first post!",
    },
    {
      text: "It's props lesson from React course",
      likes: 424,
    },
    {
      text: "It's props lesson from React course",
      likes: 424,
    },
    {
      text: "It's props lesson from React course",
      likes: 424,
    },
    {
      text: "My first post!",
    },
    {
      text: "My first post!",
      likes: 32,
    },
    {
      text: "My first post!",
    },
  ];

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
      {posts.map((v) => (
        <Post text={v.text} likes={v.likes} key={v.likes} />
      ))}
    </div>
  );
};

export default Posts;
