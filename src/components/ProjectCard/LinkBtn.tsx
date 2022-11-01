import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

interface LinkBtnProps {
  demoLink: string;
  codeLink: string;
}

function LinkBtn({ demoLink, codeLink }: LinkBtnProps) {
  return (
    <div className={styles.buttons}>
      <a
        className={clsx("button", "button--primary", styles.button)}
        href={demoLink}
        target="_blank"
        rel="noreferrer"
      >
        Demo
      </a>
      <a
        className={clsx("button", "button--primary", styles.button)}
        href={codeLink}
        target="_blank"
        rel="noreferrer"
      >
        Code
      </a>
    </div>
  );
}

export default LinkBtn;
