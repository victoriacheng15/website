import React from "react";

function SectionTitle({ title }: { title: string }) {
	return (
		<h2 className="mb-8 text-2xl md:text-3xl text-midnight-100">{title}</h2>
	);
}

export default SectionTitle;
