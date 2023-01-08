import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

interface TitleProps {
	title: string;
}

function SectionTitle({ title }: TitleProps) {
	return (
		<h2 className="mb-8 text-2xl md:text-3xl text-midnight-100">{title}</h2>
	);
}

export default SectionTitle;
