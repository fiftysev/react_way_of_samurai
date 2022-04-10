import { UserService } from "../../api/services/userService";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_IS_FETCHING = "SET_IS_FETCHING";

const followSuccess = (userId) => ({ type: FOLLOW, userId });

const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });

const setUsers = (users) => ({ type: SET_USERS, users });

const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    UserService.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    UserService.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    UserService.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
    });
  };
};
