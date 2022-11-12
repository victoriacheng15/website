import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

interface ListProps {
  children: React.ReactNode;
  classes?: string;
}

function List({ children, classes }: ListProps) {
  return (
    <ul
      className={clsx(
        classes,
        styles.list,
        "padding-left--none",
        "margin-vert--md"
      )}
    >
      {children}
    </ul>
  );
}

export default List;
