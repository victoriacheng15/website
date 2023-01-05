import React from "react";
import List from "../List";
import {
	SiGithub,
	SiLinkedin,
	SiTwitter,
	SiPolywork,
	SiCodepen,
} from "react-icons/si";
import styles from "./index.module.css";

function SocialLinks() {
	return (
		<List>
			<li>
				<a
					className={styles.link}
					href="https://github.com/victoriacheng15"
					target="_blank"
					rel="noreferrer"
				>
					<SiGithub />
				</a>
			</li>
			<li>
				<a
					className={styles.link}
					href="https://www.linkedin.com/in/victoriacheng15"
					target="_blank"
					rel="noreferrer"
				>
					<SiLinkedin />
				</a>
			</li>
			<li>
				<a
					className={styles.link}
					href="https://www.twitter.com/viktoriacheng15"
					target="_blank"
					rel="noreferrer"
				>
					<SiTwitter />
				</a>
			</li>
			<li>
				<a
					className={styles.link}
					href="https://www.polywork.com/victoriacheng15"
					target="_blank"
					rel="noreferrer"
				>
					<SiPolywork />
				</a>
			</li>
			<li>
				<a
					className={styles.link}
					href="https://codepen.io/victoriacheng15"
					target="_blank"
					rel="noreferrer"
				>
					<SiCodepen />
				</a>
			</li>
		</List>
	);
}

export default SocialLinks;
