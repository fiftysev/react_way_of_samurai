import {
  FOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
  SET_USERS,
  UNFOLLOW,
} from "../actions/users";

const initialState = {
  users: [],
  totalCount: 36,
  pageSize: 12,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        users: [...state.users],
        totalCount: action.totalCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        users: [...state.users],
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export default usersReducer;
