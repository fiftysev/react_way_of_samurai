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
    switch (action.type) {
      case "ADD-POST":
        if (this._state.profilePage.newPostText.trim() !== "") {
          this._state.profilePage.posts.push({
            id: 5,
            text: this._state.profilePage.newPostText,
            likes: 45,
          });
          this._state.profilePage.newPostText = "";
          this._callSubscriber(store.state);
        }
        break;
      case "UPDATE-NEW-POST-TEXT":
        this._state.profilePage.newPostText = action.text;
        this._callSubscriber(store.state);
        break;
      case "SEND-MESSAGE":
        if (this._state.dialogsPage.newMessageText.trim() !== "") {
          this._state.dialogsPage.messages.push({
            message: this._state.dialogsPage.newMessageText,
            alignRight: true,
          });
          this._state.dialogsPage.newMessageText = "";
          this._callSubscriber(store.state);
        }
        break;
      case "UPDATE-NEW-MESSAGE-TEXT":
        this._state.dialogsPage.newMessageText = action.text;
        this._callSubscriber(store.state);
        break;
      default:
        console.log("Error on parsing action type!");
        break;
    }
  },
};

export const ADD_POST = "ADD-POST";
export const SEND_MESSAGE = "SEND-MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text,
});
