import React from "react";
import List from "../List";
import styles from "./index.module.css";
import Image from "@theme/IdealImage";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type SocialTitles = "linkedin" | "twitter" | "github" | "polywork";

interface SocialLinks {
  title: SocialTitles;
  link: string;
}

function SocialLinks() {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const { socialLinks } = customFields;

  return (
    <List classes={styles.social}>
      {(socialLinks as SocialLinks[]).map(({ title, link }) => (
        <li key={title} className={styles.list__link}>
          <a href={link} target="_blank" rel="noopener">
            <Image alt={title} img={`./img/socials/${title}.svg`} />
          </a>
        </li>
      ))}
    </List>
  );
}

export default SocialLinks;
