import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import Rainbow from "./Rainbow";
import SocialLinks from "../SocialLinks";
import styles from "./index.module.css";

function Hero() {
	const colors = ["#C07D08", "#4B740C", "#0A7652", "#920000"];

	return (
		<header className="hero">
			<div className="container container--fluid">
				<h1 className="hero__title margin-bottom--lg">
					👋 I'm <span className={styles.highlighted}>Victoria Cheng</span>
				</h1>
				<section className={styles.colorful}>
					<RoughNotationGroup show={true}>
						<Rainbow color={colors[0]}>
							<h2 className={styles.text}>Developer</h2>
						</Rainbow>
						<Rainbow color={colors[1]}>
							<h2 className={styles.text}>Blogger</h2>
						</Rainbow>
						<Rainbow color={colors[2]}>
							<h2 className={styles.text}>Programmer</h2>
						</Rainbow>
						<Rainbow color={colors[3]}>
							<h2 className={styles.text}>Gamer</h2>
						</Rainbow>
					</RoughNotationGroup>
				</section>
				<SocialLinks />
			</div>
		</header>
	);
}

export default Hero;
