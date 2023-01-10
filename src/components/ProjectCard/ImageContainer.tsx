import React from "react";
import LinkBtn from "./LinkBtn";

type ImageContainerProps = Pick<
	ProjectCardProps,
	"image" | "title" | "demoLink" | "codeLink"
>;

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
