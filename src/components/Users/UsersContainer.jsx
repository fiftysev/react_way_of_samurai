import { connect } from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => ({
  users: state.usersPage,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch();
  },
  unfollow: (userId) => {
    dispatch();
  },
  setUsers: (users) => {
    dispatch();
  },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
