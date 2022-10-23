import React from "react";
import styles from "./index.module.css";
import ImageContainer from "./ImageContainer";
import ContentTitle from "./ContentTitle";
import TechList from "./TechList";

function ProjectCard({ projects }): JSX.Element {
  return (
    <>
      {projects.map(({ title, image, description, techs }) => (
        <section key={title} className={styles.card}>
          <h3 className={styles.card__title}>{title}</h3>
          <div className={styles.card__container}>
            <ImageContainer image={image} title={title} />
            <div className={styles.card__content}>
              <ContentTitle title="Description:" />
              <p>{description}</p>
              <ContentTitle title="Tech stacks:" />
              <TechList techs={techs} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default ProjectCard;
