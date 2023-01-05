import React from "react";
import { RoughNotation } from "react-rough-notation";

type TextProp = {
	children: React.ReactNode;
  color: string;
};

function Rainbow({ children, color }: TextProp) {
  const animationDuration = Math.floor(30 * children.length);
  
	return (
		<RoughNotation
			type="highlight"
			multiline={true}
			padding={[0, 4]}
			iterations={3}
			animationDuration={animationDuration}
			animationDelay={1000}
			color={color}
		>
			{children}
		</RoughNotation>
	);
}

export default Rainbow;
