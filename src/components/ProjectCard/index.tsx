import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import ImageContainer from "./ImageContainer";
import ContentTitle from "./ContentTitle";
import TechList from "./TechList";

function ProjectCard({ title, image, description, techs, code, demo }) {
  return (
    <div className="col col--4">
      <section className={clsx("card", styles.card)}>
        <ImageContainer
          image={image}
          title={title}
          link={code}
          name="code"
          link2={demo}
          name2="demo"
        />
        <div className={clsx("card__body")}>
          <ContentTitle title="Description:" />
          <p>{description}</p>
          <ContentTitle title="Tech stacks:" />
          <TechList techs={techs} />
        </div>
      </section>
    </div>
  );
}

export default ProjectCard;
