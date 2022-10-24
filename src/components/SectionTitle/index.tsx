import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

interface Props {
  title: string;
}

function SectionTitle({ title }: Props) {
  return (
    <h2 className={clsx("padding-bottom--md", styles.heading)}>{title}</h2>
  );
}

export default SectionTitle;
