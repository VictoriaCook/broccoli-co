import React from "react";
import styles from "./HighlightText.module.css";

interface HighlightTextProps {
  text: string;
}

const HighlightText: React.FC<HighlightTextProps> = (props) => {
  return <span className={styles.highlightTextStyles}>{props.text}</span>;
};

export default HighlightText;
