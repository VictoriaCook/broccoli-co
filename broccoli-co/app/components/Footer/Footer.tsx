import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerStyles}>
      <p className={styles.footerText}>
        Made with <span className={styles.footerAccentStyles}>❤</span> in
        Melbourne.
      </p>
      <small className={styles.footerText}>
        © 2023 Broccoli & Co. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
