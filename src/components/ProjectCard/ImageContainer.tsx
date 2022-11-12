import React from "react";
import clsx from "clsx";
import LinkBtn from "./LinkBtn";
import styles from "./index.module.css";

interface ImageContainerProps {
  image: string;
  title: string;
  demoLink: string;
  codeLink: string;
}

function ImageContainer({
  image,
  title,
  demoLink,
  codeLink,
}: ImageContainerProps) {
  return (
    <div className={clsx("card__image", styles.imgContainer)}>
      <img className={styles.image} src={image} alt={title} />
      <LinkBtn demoLink={demoLink} codeLink={codeLink} />
    </div>
  );
}

export default ImageContainer;
