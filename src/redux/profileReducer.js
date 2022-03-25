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
  const stateCopy = { ...state };
  stateCopy.posts = [...state.posts];

  switch (action.type) {
    case ADD_POST:
      if (state.newPostText.trim() !== "") {
        stateCopy.posts.push({
          id: 5,
          text: state.newPostText,
          likes: 45,
        });
        stateCopy.newPostText = "";
      }
      return stateCopy;
    case UPDATE_NEW_POST_TEXT:
      stateCopy.newPostText = action.text;
      return stateCopy;
    default:
      return state;
  }
};

export default profileReducer;
