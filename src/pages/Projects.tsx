import React from "react";
import Layout from "@theme/Layout";
import { MainContainer, SectionTitle, ProjectCard } from "../components";

const title = "Projects";
const description = "Projects that I have worked on";

function Projects(): JSX.Element {
	return (
		<Layout title={title} description={description}>
			<MainContainer>
				<SectionTitle title={title} />
				<p>{description}</p>
				<ProjectCard />
			</MainContainer>
		</Layout>
	);
}

export default Projects;
