import _ from "lodash";
import { runTreeRender } from "../render";

export let state = {
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Egor",
      },
      {
        id: 2,
        name: "Zhenya",
      },
      {
        id: 3,
        name: "Сэмчик",
      },
    ],

    messages: [
      {
        message: "Test",
      },
      {
        message: "Test",
        alignRight: true,
      },
      {
        message: "Test",
      },
      {
        message: "Test",
        alignRight: true,
      },
      {
        message: "Test",
      },
      {
        message: "Test",
      },
      {
        message: "Test",
      },
      {
        message: "Test",
      },
      {
        message: "Test",
        alignRight: true,
      },
      {
        message: "Test",
        alignRight: true,
      },
    ],
  },
  profilePage: {
    posts: [
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
    ],
  },

  navbar: {
    friends: [
      {
        name: "Alex",
      },
      {
        name: "Sam",
      },
      {
        name: "Egor",
      },
      {
        name: "Fred",
      },
      {
        name: "Anna",
      },
      {
        name: "Yohan",
      },
      {
        name: "Mary",
      },
      {
        name: "Bob",
      },
      {
        name: "John",
      },
    ],
  },
};

export let addPost = (text) => {
  state.profilePage.posts.push({
    id: 5,
    text,
    likes: 45,
  });
  runTreeRender(state, { addPost });
};
