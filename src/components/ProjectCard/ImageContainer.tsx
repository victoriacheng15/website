import React from "react";
import Image from "@theme/IdealImage";
import styles from "./index.module.css";

function ImageContainer({ image, title }) {
  return (
    <div className={styles.image}>
      <Image img={image} alt={title} />
    </div>
  );
}

export default ImageContainer;
