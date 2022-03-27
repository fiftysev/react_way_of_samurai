import React from "react";
import UserCard from "./UserCard/UserCard";
import s from "./users.module.css";
import axios from "axios";

class UsersRC extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((r) => {
        this.props.setUsers(r.data.items);
      });
  }

  render() {
    return (
      <>
        <div className={s.container}>
          {this.props.users.map((user) => {
            return (
              <UserCard
                user={user}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default UsersRC;
