import React from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import List from "../List";
import SectionTitle from "../SectionTitle";
import { desc, desc2, facts } from "./info";
import styles from "./index.module.css";

function About({ avatar }) {
  return (
    <section className="container container--fluid">
      <SectionTitle title="About Me" />
      <div className={clsx("margin-bottom--lg", styles.content)}>
        <div className={styles.avatar}>
          <Image img={avatar} alt="Victoria" />
        </div>
        <div className={styles.para}>
          <p>{desc}</p>
          <p>{desc2}</p>
          <p>If you are interested in know more about me, I had wrote a blog about <a href="/docs/blogs/my-journey-into-the-tech.md">my journey into the tech</a>.</p>
        </div>
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
