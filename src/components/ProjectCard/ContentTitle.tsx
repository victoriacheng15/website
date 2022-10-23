import React from "react";
import styles from "./index.module.css";

interface Props {
  title: string
}

function ContentTitle({ title }: Props) {
  return <h4 className={styles.content__title}>{title}</h4>;
}

export default ContentTitle;
