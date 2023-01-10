import React from "react";
import Social from "./Social";
import {
	SiCodepen,
	SiGithub,
	SiLinkedin,
	SiPolywork,
	SiTwitter,
	SiBuymeacoffee,
} from "react-icons/si";

function SocialLinks({ isFooter }: { isFooter?: boolean }) {
	return (
		<ul className="list-none flex gap-8 flex-wrap justify-center pl-0">
			<Social icon={<SiGithub />} href="https://github.com/victoriacheng15" />
			<Social
				icon={<SiLinkedin />}
				href="https://www.linkedin.com/in/victoriacheng15"
			/>
			<Social
				icon={<SiTwitter />}
				href="https://www.twitter.com/viktoriacheng15"
			/>
			<Social
				icon={<SiPolywork />}
				href="https://www.polywork.com/victoriacheng15"
			/>
			<Social icon={<SiCodepen />} href="https://codepen.io/victoriacheng15" />
			{isFooter && (
				<Social
					icon={<SiBuymeacoffee />}
					href="https://www.buymeacoffee.com/victoriacheng15"
				/>
			)}
		</ul>
	);
}

export default SocialLinks;
