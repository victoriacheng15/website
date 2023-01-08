import React from "react";

type TechsProps = {
	techs: string[];
}

function TechList({ techs }: TechsProps) {
	return (
		<ul className="list-none pl-0 flex gap-2 flex-wrap">
			{techs.map((item) => (
				<li
					key={item}
					className="bg-midnight-300 text-midnight-800 font-medium px-2 py-1 rounded-lg"
				>
					{item}
				</li>
			))}
		</ul>
	);
}

export default TechList;
