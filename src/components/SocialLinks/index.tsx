import React from "react";
import {
	SiGithub,
	SiLinkedin,
	SiTwitter,
	SiPolywork,
	SiCodepen,
} from "react-icons/si";

function SocialLinks() {
	return (
		<ul className="list-none flex gap-8 flex-wrap justify-center pl-0">
			<li>
				<a
					className="text-4xl text-midnight-100 hover:text-yellow-500 duration-300 ease-in-out"
					href="https://github.com/victoriacheng15"
					target="_blank"
					rel="noreferrer"
				>
					<SiGithub />
				</a>
			</li>
			<li>
				<a
					className="text-4xl text-midnight-100 hover:text-yellow-500 duration-300 ease-in-out"
					href="https://www.linkedin.com/in/victoriacheng15"
					target="_blank"
					rel="noreferrer"
				>
					<SiLinkedin />
				</a>
			</li>
			<li>
				<a
					className="text-4xl text-midnight-100 hover:text-yellow-500 duration-300 ease-in-out"
					href="https://www.twitter.com/viktoriacheng15"
					target="_blank"
					rel="noreferrer"
				>
					<SiTwitter />
				</a>
			</li>
			<li>
				<a
					className="text-4xl text-midnight-100 hover:text-yellow-500 duration-300 ease-in-out"
					href="https://www.polywork.com/victoriacheng15"
					target="_blank"
					rel="noreferrer"
				>
					<SiPolywork />
				</a>
			</li>
			<li>
				<a
					className="text-4xl text-midnight-100 hover:text-yellow-500 duration-300 ease-in-out"
					href="https://codepen.io/victoriacheng15"
					target="_blank"
					rel="noreferrer"
				>
					<SiCodepen />
				</a>
			</li>
		</ul>
	);
}

export default SocialLinks;
