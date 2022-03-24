import { connect } from "react-redux";
import FriendsBlock from "./FriendsBlock";

const mapStateToProps = (state) => {
  return {
    friends: state.navbar.friends,
  };
};

const mapDispatchToProps = (dispatch) => ({});

const FriendsBlockContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsBlock);

export default FriendsBlockContainer;
