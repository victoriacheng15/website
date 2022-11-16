import React from "react";
import clsx from "clsx";
import DescAboutMe from "./_about-me.md";
import styles from "./index.module.css";

function About() {
	return (
		<section className="container container--fluid">
			<div className="row">
				<img
					className={clsx(
						"col",
						"col--4",
						"col--offset-1",
						"margin-bottom--lg",
						styles.avatar,
					)}
					src="./img/avatar.webp"
					alt="Victoria with orange background"
				/>
				<section
					className={clsx(
						"col",
						"col--6",
						"col--offset-1",
						"keep",
						styles.para,
					)}
				>
					<DescAboutMe />
				</section>
			</div>
		</section>
	);
}

export default About;
