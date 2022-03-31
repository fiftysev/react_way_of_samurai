import { SET_AUTH_USER } from "../actions/auth";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.user,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
