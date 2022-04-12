import React from "react";
import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ isAuth, children }) => {
  const { location } = useLocation();

  return isAuth ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(RequireAuth);
