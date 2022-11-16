import React from "react";
import Layout from "@theme/Layout";
import {
	MainContainer,
	Hero,
	SectionTitle,
	AboutMe,
	SkillList,
} from "../components";

function Home(): JSX.Element {
	return (
		<Layout title="Home">
			<Hero />
			<MainContainer>
				<SectionTitle title="About me" />
				<AboutMe />
				<SectionTitle title="Skills" />
				<SkillList />
			</MainContainer>
		</Layout>
	);
}

export default Home;
