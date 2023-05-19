import React from 'react';
import styles from './Title.module.css';

const Title: React.FC = () => {
    return (
        <h1 className={styles.titleStyles}>A <span className={styles.titleAccentStyles}>better</span> way <br /> to enjoy every day.</h1>
    );
};

export default Title;
