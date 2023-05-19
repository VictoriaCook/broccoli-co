import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footerStyles}>
            <p className={styles.footerText}>Made with ❤ in Melbourne.</p>
            <p className={styles.footerText}>© 2018 Broccoli & Co. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
