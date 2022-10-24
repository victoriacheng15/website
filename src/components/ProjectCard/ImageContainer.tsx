import React from "react";
import Image from "@theme/IdealImage";
import styles from "./index.module.css";

interface Props {
  image: string;
  title: string;
}

function ImageContainer({ image, title }: Props) {
  return (
    <div className={styles.image}>
      <Image img={image} alt={title} />
    </div>
  );
}

export default ImageContainer;
