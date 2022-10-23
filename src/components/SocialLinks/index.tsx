import React from "react";
import { socialList } from "./socialList";
import styles from "./index.module.css";

function SocialLinks() {
  return (
    <ul className={styles.list}>
      {socialList.map((site) => (
        <li className={styles.list__link}>
          <a href={site.link} target="_blank" rel="noopener">
            <img src={`./img/${site.title}.svg`} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
