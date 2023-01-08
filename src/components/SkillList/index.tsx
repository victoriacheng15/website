import React from "react";
import { skillsList } from "./skillsList";

interface Skills {
	title: string;
	address: string;
}

function SkillList() {
	return (
		<section>
			<ul className="list-none flex flex-wrap gap-6 justify-center pl-0">
				{(skillsList as Skills[]).map(({ title, address }) => (
					<li key={title} className="grid place-items-center">
						<img className="h-8" alt={title} src={address} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default SkillList;
