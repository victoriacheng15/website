import React from "react";
import Layout from "@theme/Layout";
import ProjectCard from "@site/src/components/ProjectCard";
import { projects } from "./projectsList";
import styles from "./index.module.css";

export default function Projects(): JSX.Element {
  return (
    <Layout title="Projects">
      <main className={styles.project}>
        <div className={styles.container}>
          <div className={styles.project__grid}>
            <ProjectCard projectsList={projects} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
