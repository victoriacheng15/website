import React from "react";
import List from "../List";
import styles from "./index.module.css";
import { skillsList } from "./skillsList";

interface Skills {
  title: string;
  address: string;
}

function SkillList() {
  return (
    <section className="container container--fluid">
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

export default SkillList;
