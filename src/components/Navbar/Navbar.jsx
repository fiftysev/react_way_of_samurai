import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";
import FriendsBlockContainer from "./FriendsBlock/FriendsBlockContainer";

const Navbar = (props) => {
  const linkClass = (navData) => (navData.isActive ? s.active : "");
  return (
    <nav className={s.nav}>
      <NavLink to="/profile" className={linkClass}>
        Profile
      </NavLink>
      <NavLink to="/dialogs" className={linkClass}>
        Messages
      </NavLink>
      <NavLink to="/news" className={linkClass}>
        News
      </NavLink>
      <NavLink to="/music" className={linkClass}>
        Music
      </NavLink>
      <NavLink to="/settings" className={linkClass}>
        Settings
      </NavLink>
      <NavLink to="/users" className={linkClass}>
        Users
      </NavLink>
      <FriendsBlockContainer />
    </nav>
  );
};

export default Navbar;
