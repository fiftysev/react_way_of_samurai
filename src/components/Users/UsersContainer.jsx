import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalCountAC,
  setUsersAC,
  unfollowAC,
} from "../../redux/actions/users";
import UsersRC from "./UsersRC";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  totalCount: state.usersPage.totalCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followAC(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowAC(userId));
  },
  setUsers: (users) => {
    dispatch(setUsersAC(users));
  },
  setTotalCount: (totalCount) => {
    dispatch(setTotalCountAC(totalCount));
  },
  setCurrentPage: (currentPage) => {
    dispatch(setCurrentPageAC(currentPage));
  },
  setIsFetching: (isFetching) => {
    dispatch(setIsFetchingAC(isFetching));
  },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersRC);

export default UsersContainer;
