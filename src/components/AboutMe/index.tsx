import React from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import List from "../List";
import SectionTitle from "../SectionTitle";
import { facts } from "./info";
import styles from "./index.module.css";

function About({ avatar, AboutMeDesc }) {
  return (
    <section className="container container--fluid">
      <SectionTitle title="About Me" />
      <div className={clsx("margin-bottom--lg", styles.content)}>
        <div className={styles.avatar}>
          <Image img={avatar} alt="Victoria" />
        </div>
        <section className={styles.para}>{AboutMeDesc}</section>
      </div>
      <h3>Random or not so random facts about myself:</h3>
      <List classes={styles.facts__list}>
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </List>
    </section>
  );
}

export default About;
