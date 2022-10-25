import React from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import LinkBtn from "./LinkBtn";
import styles from "./index.module.css";

interface Props {
  image: string;
  title: string;
  link: string;
  name: string;
  link2: string;
  name2: string;
}

function ImageContainer({ image, title, link, name, link2, name2 }: Props) {
  return (
    <div className={clsx("card__image", styles.image)}>
      <Image img={image} alt={title} />
      <div className={styles.buttons}>
        <LinkBtn link={link} name={name} />
        <LinkBtn link={link2} name={name2} />
      </div>
    </div>
  );
}

export default ImageContainer;
