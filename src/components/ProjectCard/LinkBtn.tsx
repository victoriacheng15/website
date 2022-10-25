import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

function LinkBtn({ link, name }) {
  return (
    <a
      className={clsx('button','button--primary', styles.button)}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  );
}

export default LinkBtn;
