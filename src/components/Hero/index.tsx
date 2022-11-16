import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { displayGreeting } from "./displayGreeting";
import SocialLinks from "../SocialLinks";
import styles from "./index.module.css";

function Hero() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className="hero">
			<div className="container container--fluid">
				<h1 className="hero__title margin-bottom--lg">
					{displayGreeting()}
					<br />
					👋 I'm <span className={styles.highlighted}>Victoria Cheng</span>,
				</h1>
				<p className="hero__subtitle margin-bottom--lg">{siteConfig.tagline}</p>
				<SocialLinks />
			</div>
		</header>
	);
}

export default Hero;
