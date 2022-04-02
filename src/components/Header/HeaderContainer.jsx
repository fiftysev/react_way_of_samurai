import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUser } from "../../redux/actions/auth";
import { AuthService } from "../../api/services/authService";

class HeaderContainer extends React.Component {
  componentDidMount() {
    AuthService.aboutMe().then((data) => {
      if (data.resultCode === 0) {
        this.props.setAuthUser(data.data);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const mapDispatchToProps = {
  setAuthUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
