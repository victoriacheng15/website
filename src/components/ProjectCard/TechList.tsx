import React from "react";

type TechsProps = Pick<ProjectCardProps, "techs">;

function TechList({ techs }: TechsProps) {
	return (
		<ul className="list-none pl-0 flex gap-2 flex-wrap">
			{techs.map((item) => (
				<li
					key={item}
					className="bg-midnight-900 text-midnight-50 font-medium px-3 py-2 rounded-lg"
				>
					{item}
				</li>
			))}
		</ul>
	);
}

export default TechList;
