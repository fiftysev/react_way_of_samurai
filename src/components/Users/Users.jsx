import React from "react";
import UserCard from "./UserCard/UserCard";
import s from "./users.module.css";
import users from "../../constants";
import axios from "axios";

const Users = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((r) => {
          props.setUsers(r.data.items);
          console.log(r.data);
        });
    }
  };
  return (
    <>
      <button onClick={getUsers}>Get users</button>
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
    </>
  );
};

export default Users;
