import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/actions/profile";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfileContainer = ({ profile, setUserProfile }) => {
  let { userId } = useParams();

  if (!userId) {
    userId = 2;
  }

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => {
        setUserProfile(res.data);
      });
  }, [profile, setUserProfile, userId]);

  return <Profile user={profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const mapDispatchToProps = {
  setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
