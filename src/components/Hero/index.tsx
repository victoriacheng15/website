import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { displayGreeting } from "./displayGreeting";
import styles from "./index.module.css";

function Hero() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero", styles.hero)}>
      <div className="container container--fluid">
        <div className={styles.hero__content}>
          <h1 className={clsx("hero__title", styles.title)}>
            {displayGreeting()}
            <br />
            👋 I'm <span className={styles.highlighted}>Victoria Cheng</span>,
          </h1>
          <p className={clsx("hero__subtitle", styles.subtitle)}>
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
