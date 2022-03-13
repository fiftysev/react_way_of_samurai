import React from "react";
import logo from "../../logo.svg";
import s from "./header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="" className={s.logo} />
    </header>
  );
};

export default Header;
