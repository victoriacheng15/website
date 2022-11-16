import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
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
		<div className="row">
			{(projects as Projects[]).map(
				({ image, title, code, demo, description, techs }) => (
					<div key={title} className="col col--4">
						<section className={clsx("card", "margin-bottom--lg", styles.card)}>
							<ImageContainer
								image={image}
								title={title}
								codeLink={code}
								demoLink={demo}
							/>
							<div className={clsx("card__body")}>
								<ContentTitle title="Description:" />
								<p>{description}</p>
								<ContentTitle title="Tech stacks:" />
								<TechList techs={techs} />
							</div>
						</section>
					</div>
				),
			)}
		</div>
	);
}

export default ProjectCard;
