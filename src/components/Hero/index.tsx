import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Rainbow from "./Rainbow";
import SocialLinks from "../SocialLinks";

function Hero() {
	const colors = ["#C07D08", "#4B740C", "#0A7652", "#920000"];

	return (
		<header className="bg-gray-900 py-20">
			<div className="w-11/12 max-w-5xl mx-auto">
				<h1 className="text-3xl md:text-5xl mb-20 text-center">
					👋 I'm{" "}
					<RoughNotation
						type="underline"
						show={true}
						color="#ffd700"
						strokeWidth={2}
						animationDelay={1000}
						iterations={4}
					>
						Victoria Cheng
					</RoughNotation>
				</h1>
				<section className="flex flex-col gap-10 mb-20 md:flex-row justify-center">
					<RoughNotationGroup show={true}>
						<Rainbow color={colors[0]}>
							<h2 className="text-xl md:text-3xl m-0 text-center">Developer</h2>
						</Rainbow>
						<Rainbow color={colors[1]}>
							<h2 className="text-xl md:text-3xl m-0 text-center">Blogger</h2>
						</Rainbow>
						<Rainbow color={colors[2]}>
							<h2 className="text-xl md:text-3xl m-0 text-center">
								Programmer
							</h2>
						</Rainbow>
						<Rainbow color={colors[3]}>
							<h2 className="text-xl md:text-3xl m-0 text-center">Gamer</h2>
						</Rainbow>
					</RoughNotationGroup>
				</section>
				<SocialLinks />
			</div>
		</header>
	);
}

export default Hero;
