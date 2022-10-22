import React from "react";
import { skillsList } from "./skillsList";
import styles from "./index.module.css";

function Skills() {
  return (
    <ul className={styles.list}>
      {Object.values(skillsList).map((skill) => (
        <li className={styles.list__skill}>
          <img alt={skill.title} src={skill.address} />
        </li>
      ))}
    </ul>
  );
}

export default Skills;
