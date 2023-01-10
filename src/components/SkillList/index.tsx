import React from "react";
import { skillsList } from "./skillsList";

function SkillList() {
	return (
		<section>
			<ul className="list-none flex flex-wrap gap-6 justify-center pl-0">
				{skillsList.map(({ title, address }) => (
					<li key={title} className="grid place-items-center">
						<img className="h-8" alt={title} src={address} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default SkillList;
