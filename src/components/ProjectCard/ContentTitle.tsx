import React from "react";
import { RoughNotation } from "react-rough-notation";

interface ContentTitleProps {
	title: string;
}

function ContentTitle({ title }: ContentTitleProps) {
	return (
		<RoughNotation
			type="box"
			show={true}
			color="#00172E"
			strokeWidth={3}
			animationDelay={1500}
		>
			<h4 className="p-1 text-xl">{title}</h4>
		</RoughNotation>
	);
}

export default ContentTitle;
