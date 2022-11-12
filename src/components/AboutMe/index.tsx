import React from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import List from "../List";
import SectionTitle from "../SectionTitle";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import DescAboutMe from "./_about-me.md";

function About() {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const { avatar, facts } = customFields;

  return (
    <section className="container container--fluid">
      <SectionTitle title="About Me" />
      <div className={clsx("margin-bottom--lg", styles.content)}>
        <Image
          className={styles.avatar}
          img={avatar}
          alt="Victoria with orange background color"
        />
        <section className={styles.para}>
          <DescAboutMe />
        </section>
      </div>
      <h3>Random or not so random facts about myself:</h3>
      <List classes={styles.facts__list}>
        {(facts as string[]).map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </List>
    </section>
  );
}

export default About;
