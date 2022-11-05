import React from "react";
import List from "../List";
import SectionTitle from "../SectionTitle";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface Skills {
  title: string;
  address: string;
}

function Skills() {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const { skills } = customFields;

  return (
    <section className="container container--fluid">
      <SectionTitle title="Skills" />
      <List>
        {(skills as Skills[]).map(({ title, address }) => (
          <li key={title} className={styles.list__skill}>
            <img alt={title} src={address} />
          </li>
        ))}
      </List>
    </section>
  );
}

export default Skills;
