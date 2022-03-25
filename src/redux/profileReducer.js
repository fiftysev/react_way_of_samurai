export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});

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
        newPostText: "",
      };
    default:
      return state;
  }
};

export default profileReducer;
