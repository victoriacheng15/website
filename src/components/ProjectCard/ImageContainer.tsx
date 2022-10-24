import React from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import styles from "./index.module.css";

interface Props {
  image: string;
  title: string;
}

function ImageContainer({ image, title }: Props) {
  return (
    <div className={clsx("card__image", styles.image)}>
      <Image img={image} alt={title} />
    </div>
  );
}

export default ImageContainer;
