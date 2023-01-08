import React from "react";
import ImageContainer from "./ImageContainer";
import ContentTitle from "./ContentTitle";
import TechList from "./TechList";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface Projects {
	title: string;
	code: string;
	demo: string;
	image: string;
	description: string;
	techs: string[];
}

function ProjectCard() {
	const { siteConfig } = useDocusaurusContext();
	const { customFields } = siteConfig;
	const { projects } = customFields;

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start">
			{(projects as Projects[]).map(
				({ image, title, code, demo, description, techs }) => (
					<section className="col-span-1 bg-midnight-500 rounded-lg overflow-hidden max-h-max">
						<ImageContainer
							image={image}
							title={title}
							codeLink={code}
							demoLink={demo}
						/>
						<div className="text-lg p-4">
							<h3 className="mb-6 bg-yellow-600 p-1 text-midnight-800 tracking-widest text-2xl text-center">
								{title}
							</h3>
							<ContentTitle title="Description:" />
							<p className="leading-8 text-lg">{description}</p>
							<ContentTitle title="Tech stacks:" />
							<TechList techs={techs} />
						</div>
					</section>
				),
			)}
		</div>
	);
}

export default ProjectCard;
