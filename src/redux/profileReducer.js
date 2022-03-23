export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.newPostText.trim() !== "") {
        state.posts.push({
          id: 5,
          text: state.newPostText,
          likes: 45,
        });
        state.newPostText = "";
      }
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export default profileReducer;
