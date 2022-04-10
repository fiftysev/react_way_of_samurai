import { AuthService } from "../../api/services/authService";

export const SET_AUTH_USER = "SET_AUTH_USER";

const setAuthUser = (user) => ({ type: SET_AUTH_USER, user });

export const getAuthUser = () => {
  return (dispatch) => {
    AuthService.aboutMe().then((res) => {
      if (res.resultCode === 0) {
        dispatch(setAuthUser(res.data));
      }
    });
  };
};
