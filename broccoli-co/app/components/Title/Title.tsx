import React from "react";
import styles from "./Title.module.css";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = (props) => {
  return <h1 className={styles.titleStyles}>{props.children}</h1>;
};

export default Title;
