import { UserService } from "../../api/services/userService";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    UserService.getProfile(userId).then((res) => {
      dispatch(setUserProfile(res.data));
    });
  };
};
