import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { displayGreeting } from "./displayGreeting";
import styles from "./index.module.css";

function Hero() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            {displayGreeting()}
            <br />
            👋 I'm <span className={styles.highlighted}>Victoria Cheng</span>,
          </h1>
          <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
