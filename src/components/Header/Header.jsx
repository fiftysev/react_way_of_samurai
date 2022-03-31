import React from "react";
import logo from "../../logo.svg";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <a href="/">
        <img src={logo} alt="" className={s.logo} />
      </a>
      <div className={s.auth_block}>
        {!props.isAuth && (
          <NavLink to={"/login"} className={s.text}>
            Login
          </NavLink>
        )}
        {props.isAuth && <p className={s.text}>{props.login}</p>}
      </div>
    </header>
  );
};

export default Header;
