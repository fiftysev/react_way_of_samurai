import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsers, unfollowAC } from "../../redux/actions/users";
import UsersRC from "./UsersRC";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followAC(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowAC(userId));
  },
  setUsers: (users) => {
    dispatch(setUsers(users));
  },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersRC);

export default UsersContainer;
