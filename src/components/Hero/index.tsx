import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { displayGreeting } from "./displayGreeting";
import SocialLinks from "../SocialLinks";
import styles from "./index.module.css";

function Hero() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="hero">
      <div className="container container--fluid">
        <div className={styles.hero__content}>
          <h1 className="hero__title">
            {displayGreeting()}
            <br />
            👋 I'm <span className={styles.highlighted}>Victoria Cheng</span>,
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}

export default Hero;
