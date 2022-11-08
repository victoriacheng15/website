import React from "react";
import List from "../List";
import styles from "./index.module.css";
import { socialsList } from "./socialsList";

type SocialTitles = "linkedin" | "twitter" | "github" | "polywork";

interface SocialLinks {
  title: SocialTitles;
  link: string;
}

function SocialLinks() {
  return (
    <List classes={styles.social}>
      {(socialsList as SocialLinks[]).map(({ title, link }) => (
        <li key={title} className={styles.list__link}>
          <a href={link} target="_blank" rel="noopener">
            <img alt={title} src={`./img/socials/${title}.svg`} />
          </a>
        </li>
      ))}
    </List>
  );
}

export default SocialLinks;
