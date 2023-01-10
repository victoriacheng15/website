import React from "react";
import SocialLinks from "@site/src/components/SocialLinks";

export default function FooterLayout(): JSX.Element {
	const YEAR = new Date().getFullYear();

	return (
		<footer className="bg-midnight-800 py-10">
			<div className="w-11/12 max-w-6xl mx-auto">
				<p className="text-center">
					Something doesn't work?{" "}
					<a
						href="https://github.com/victoriacheng15/website/issues"
						target="_blank"
						rel="noreferrer"
					>
						Raise an issue!
					</a>
				</p>
				<SocialLinks isFooter={true} />
				<p className="text-center m-0">
					Copyright &copy; {YEAR} Victoria Cheng | Built with Docusaurus
				</p>
			</div>
		</footer>
	);
}
