import React from "react";

function Social({ icon, href }: SocialProps) {
	return (
		<>
			<li>
				<a
					className="text-4xl text-midnight-100 hover:text-yellow-500 duration-300 ease-in-out"
					href={href}
					target="_blank"
					rel="noreferrer"
				>
					{icon}
				</a>
			</li>
		</>
	);
}

export default Social;
