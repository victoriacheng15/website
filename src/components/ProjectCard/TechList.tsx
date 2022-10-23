import React from "react";
import styles from "./index.module.css";

function TechList({ techs }) {
  return (
    <ul className={styles.techs__list}>
      {techs.map((item) => (
        <li key={item} className={styles.tech}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default TechList;
