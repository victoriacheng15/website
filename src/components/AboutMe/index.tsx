import React from "react";
import clsx from "clsx";
import SectionTitle from "../SectionTitle";
import DescAboutMe from "./_about-me.md";
import styles from "./index.module.css";

function About() {
  return (
    <section className="container container--fluid">
      <SectionTitle title="About Me" />
      <div className="row">
        <img
          className={clsx("col", "col--4", "col--offset-1", styles.avatar)}
          src="./img/avatar.webp"
          alt="Victoria with orange background"
        />
        <section
          className={clsx("col", "col--6", "col--offset-1", styles.para)}
        >
          <DescAboutMe />
        </section>
      </div>
    </section>
  );
}

export default About;
