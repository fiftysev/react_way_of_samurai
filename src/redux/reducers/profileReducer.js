import {
  ADD_POST,
  SET_USER_PROFILE,
  UPDATE_NEW_POST_TEXT,
} from "../actions/profile";

let initialState = {
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
  profile: {},
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.newPostText.trim() !== "") {
        return {
          ...state,
          posts: [
            ...state.posts,
            { id: 5, text: state.newPostText, likes: 45 },
          ],
          newPostText: "",
        };
      }
      return state;
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: { ...action.profile },
      };
    default:
      return state;
  }
};

export default profileReducer;
