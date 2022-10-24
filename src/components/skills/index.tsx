import React from "react";
import List from "../List";
import SectionTitle from "../SectionTitle";
import { skillsList } from "./skillsList";
import styles from "./index.module.css";

function Skills() {
  return (
    <section className="container container--fluid">
      <SectionTitle title="Skills" />
      <List>
        {skillsList.map((skill) => (
          <li className={styles.list__skill}>
            <img alt={skill.title} src={skill.address} />
          </li>
        ))}
      </List>
    </section>
  );
}

export default Skills;
