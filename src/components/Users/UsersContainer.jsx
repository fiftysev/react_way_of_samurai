import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  unfollow,
} from "../../redux/actions/users";
import UsersRC from "./UsersRC";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  totalCount: state.usersPage.totalCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
});

const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersRC);

export default UsersContainer;
