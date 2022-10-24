import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

interface Props {
  children: React.ReactNode;
  classes?: string;
}

function List({ children, classes }: Props) {
  return <ul className={clsx(classes, styles.list)}>{children}</ul>;
}

export default List;
