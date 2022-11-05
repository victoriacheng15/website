import React from "react";
import Layout from "@theme/Layout";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

const title = "Projects";
const description = "Projects that I have worked on";

function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid padding-vert--lg">
        <SectionTitle title={title} />
        <p>{description}</p>
        <div className="row">
          <ProjectCard />
        </div>
      </main>
    </Layout>
  );
}

export default Projects;
