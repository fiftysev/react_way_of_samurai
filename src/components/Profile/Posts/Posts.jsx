import React from "react";
import Post from "./Post/Post";
import s from "./posts.module.css";
import { v4 } from "uuid";

const Posts = (props) => {
  let newPost = React.createRef();
  return (
    <div className={s.container}>
      <h2 className={s.title}>My posts</h2>
      <div className={s.post__form}>
        <textarea
          ref={newPost}
          className={s.form__input}
          value={props.state.newPostText}
          onChange={() =>
            props.actions.updateNewPostText(newPost.current.value)
          }
          name="postText"
          id="create_post"
          cols="20"
          rows="2"
        />
        <button
          className={s.form__button}
          onClick={() => {
            props.actions.addPost();
            props.actions.updateNewPostText("");
          }}>
          Add post
        </button>
      </div>
      {props.state.posts.map((v) => (
        <Post text={v.text} likes={v.likes} key={v4()} />
      ))}
    </div>
  );
};

export default Posts;
