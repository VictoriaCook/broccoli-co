import React from 'react';
import styles from './BodyText.module.css';

const BodyText: React.FC = () => {
    return (
        <p className={styles.bodyTextStyles}>Be the <span className={styles.bodyTextAccentStyles}>first</span> to know when we launch.</p>
    );
};

export default BodyText;
