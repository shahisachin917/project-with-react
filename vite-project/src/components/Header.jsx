import React from "react";
import styles from "./Header.module.css";

function Header({ text = "Default text" }) {
  return (
    <header>
      <div className={styles.container}>{text}</div>
    </header>
  );
}

export default Header;
