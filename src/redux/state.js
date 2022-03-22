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
        alignRight: true,
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
    newMessageText: "",
    updateNewMessageText: function (text) {
      this.newMessageText = text;
      runTreeRender(state);
    },
    sendNewMessage: function () {
      this.messages.push({
        message: this.newMessageText,
        alignRight: true,
      });
      runTreeRender(state);
    },
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
    newPostText: "",
    updateNewPostText: function (text) {
      this.newPostText = text;
      runTreeRender(state);
    },
    addPost: function () {
      this.posts.push({
        id: 5,
        text: state.profilePage.newPostText,
        likes: 45,
      });
      runTreeRender(state);
    },
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
