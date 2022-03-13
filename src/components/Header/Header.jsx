import React from "react";
import logo from "../logo.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" className={styles.logo} />
    </header>
  );
};

export default Header;
