import React from "react";
import { socialList } from "./socialList";
import List from "../List";
import styles from "./index.module.css";

function SocialLinks() {
  return (
    <List classes={styles.social}>
      {socialList.map(({ title, link }) => (
        <li key={title} className={styles.list__link}>
          <a href={link} target="_blank" rel="noopener">
            <img alt={title} src={`./img/${title}.svg`} />
          </a>
        </li>
      ))}
    </List>
  );
}

export default SocialLinks;
