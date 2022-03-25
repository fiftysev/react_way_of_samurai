import React from "react";
import UserCard from "./UserCard";
import s from "./users.module.css";

const Users = () => {
  return (
    <div className={s.container}>
      <UserCard />
    </div>
  );
};

export default Users;
