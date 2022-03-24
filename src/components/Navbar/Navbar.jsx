import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";
import FriendsBlockContainer from "./FriendsBlock/FriendsBlockContainer";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/profile"
        className={(navData) => (navData.isActive ? s.active : "")}>
        Profile
      </NavLink>
      <NavLink
        to="/dialogs"
        className={(navData) => (navData.isActive ? s.active : "")}>
        Messages
      </NavLink>
      <NavLink
        to="/news"
        className={(navData) => (navData.isActive ? s.active : "")}>
        News
      </NavLink>
      <NavLink
        to="/music"
        className={(navData) => (navData.isActive ? s.active : "")}>
        Music
      </NavLink>
      <NavLink
        to="/settings"
        className={(navData) => (navData.isActive ? s.active : "")}>
        Settings
      </NavLink>
      <FriendsBlockContainer />
    </nav>
  );
};

export default Navbar;
