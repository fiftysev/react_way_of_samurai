import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

export let store = {
  _state: {
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
  },
  get state() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};
