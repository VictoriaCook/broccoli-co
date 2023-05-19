import React from 'react';
import styles from './BodyText.module.css';

interface BodyTextProps {
    children: React.ReactNode;
}

const BodyText: React.FC<BodyTextProps> = (props) => {
    return (
        <p className={styles.bodyTextStyles}>{props.children}</p>
    );
};

export default BodyText;
