import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
  const onPostTextChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const state = props.store.getState().profilePage;

  return (
    <Posts
      onPostTextChange={onPostTextChange}
      addPost={addPost}
      posts={state.posts}
      newPostText={state.newPostText}
    />
  );
};

export default PostsContainer;
