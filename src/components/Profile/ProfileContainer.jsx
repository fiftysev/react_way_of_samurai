import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/actions/profile";

const ProfileContainer = ({ profile, getUserProfile }) => {
  let { userId } = useParams();

  if (!userId) {
    userId = 2;
  }

  useEffect(() => {
    getUserProfile(userId);
  });
  return <Profile user={profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const mapDispatchToProps = {
  getUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
