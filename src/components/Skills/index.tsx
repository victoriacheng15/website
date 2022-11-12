import React from "react";
import List from "../List";
import SectionTitle from "../SectionTitle";
import styles from "./index.module.css";
import { skillsList } from "./skillsList";

interface Skills {
  title: string;
  address: string;
}

function Skills() {
  return (
    <section className="container container--fluid">
      <SectionTitle title="Skills" />
      <List>
        {(skillsList as Skills[]).map(({ title, address }) => (
          <li key={title} className={styles.list__skill}>
            <img className={styles.list__image} alt={title} src={address} />
          </li>
        ))}
      </List>
    </section>
  );
}

export default Skills;
