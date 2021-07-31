import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img src="/images/logo.png" className={styles.logo}></img>
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
