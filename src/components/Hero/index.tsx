import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Container from "../Container";
import { displayGreeting } from "./displayGreeting";
import styles from "./index.module.css";

function Hero() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <Container>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            {displayGreeting()}
            <br />
            👋 I'm <span className={styles.highlighted}>Victoria Cheng</span>,
          </h1>
          <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
        </div>
      </Container>
    </header>
  );
}

export default Hero;
