import React from "react";
import { skillsList } from "./skillsList";
import styles from "./index.module.css";

function Skills() {
  return (
    <section className="container container--fluid">
      <h2>Skills/Toolbox</h2>
      <ul className={styles.list}>
        {skillsList.map((skill) => (
          <li className={styles.list__skill}>
            <img alt={skill.title} src={skill.address} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
