import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

function TechList({ techs }) {
  return (
    <ul className={clsx("pills", styles.techs__list)}>
      {techs.map((item) => (
        <li
          key={item}
          className={clsx("padding-vert--xs", "padding-horiz--sm", styles.tech)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default TechList;
