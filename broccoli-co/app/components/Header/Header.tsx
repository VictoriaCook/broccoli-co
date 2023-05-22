import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.headerStyles}>
      <Logo />
    </header>
  );
};

export default Header;
