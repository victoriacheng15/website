import React from "react";

interface LinkBtnProps {
	demoLink: string;
	codeLink: string;
}

function LinkBtn({ demoLink, codeLink }: LinkBtnProps) {
	return (
		<div className="absolute w-11/12 bottom-[5%] flex justify-between">
			<a
				className="bg-midnight-100 p-2 text-midnight-800 font-bold text-lg rounded-lg opacity-70 hover:opacity-100 duration-300 ease-in-out hover:no-underline hover:text-midnight-800"
				href={demoLink}
				target="_blank"
				rel="noreferrer"
			>
				Demo
			</a>
			<a
				className="bg-midnight-100 p-2 text-midnight-800 font-bold text-lg rounded-lg opacity-70 hover:opacity-100 duration-300 ease-in-out hover:no-underline hover:text-midnight-800"
				href={codeLink}
				target="_blank"
				rel="noreferrer"
			>
				Code
			</a>
		</div>
	);
}

export default LinkBtn;
