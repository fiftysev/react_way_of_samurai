import React from "react";
import UserCard from "./UserCard/UserCard";
import s from "./users.module.css";
import users from "../../constants";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers(users);
  }
  return (
    <div className={s.container}>
      {props.users.map((user) => {
        return (
          <UserCard
            user={user}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        );
      })}
    </div>
  );
};

export default Users;
