import React from "react";
import DescAboutMe from "./_about-me.md";

function About() {
	return (
		<section>
			<div className="flex flex-col gap-10 justify-center items-center md:flex-row md:items-start md:gap-32">
				<img
					className="w-72 aspect-square md:w-96"
					src="./img/avatar.webp"
					alt="Victoria with orange background"
				/>
				<section
					className="text-lg leading-8"
				>
					<DescAboutMe />
				</section>
			</div>
		</section>
	);
}

export default About;
