import React from "react";
import { socialList } from "./socialList";
import styles from "./index.module.css";

function SocialLinks() {
  return (
    <section className="container container--fluid">
      <ul className={styles.list}>
        {socialList.map((site) => (
          <li className={styles.list__link}>
            <a href={site.link} target="_blank" rel="noopener">
              <img alt={site.title} src={`./img/${site.title}.svg`} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SocialLinks;
