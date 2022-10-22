import React from "react";
import styles from './index.module.css'

function ContentTitle({ title }) {
  return <h4 className={styles.content__title}>{title}</h4>;
}

export default ContentTitle;
