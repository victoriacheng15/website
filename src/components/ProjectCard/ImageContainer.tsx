import React from "react";
import LinkBtn from "./LinkBtn";

interface ImageContainerProps {
	image: string;
	title: string;
	demoLink: string;
	codeLink: string;
}

function ImageContainer({
	image,
	title,
	demoLink,
	codeLink,
}: ImageContainerProps) {
	return (
		<div className="relative flex justify-center">
			<img className="w-full h-full object-contain" src={image} alt={title} />
			<LinkBtn demoLink={demoLink} codeLink={codeLink} />
		</div>
	);
}

export default ImageContainer;
