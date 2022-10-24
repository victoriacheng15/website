import React from "react";
import { socialList } from "./socialList";
import List from "../List";
import styles from "./index.module.css";

function SocialLinks() {
  return (
    <List classes={styles.social}>
      {socialList.map((site) => (
        <li className={styles.list__link}>
          <a href={site.link} target="_blank" rel="noopener">
            <img alt={site.title} src={`./img/${site.title}.svg`} />
          </a>
        </li>
      ))}
    </List>
  );
}

export default SocialLinks;
