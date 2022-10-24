import React from "react";
import styles from "./index.module.css";

interface ChildrenProps {
  children: React.ReactNode;
}

function Container({ children }: ChildrenProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
