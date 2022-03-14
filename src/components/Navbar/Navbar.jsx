import React from "react";
import s from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <a href="/profile">Profile</a>
      <a href="/dialogs">Messages</a>
      <a href="#news">News</a>
      <a href="#music">Music</a>
      <a href="#settings">Settings</a>
    </nav>
  );
};

export default Navbar;
