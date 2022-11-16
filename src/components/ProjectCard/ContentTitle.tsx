import React from "react";
import styles from "./index.module.css";

interface ContentTitleProps {
	title: string;
}

function ContentTitle({ title }: ContentTitleProps) {
	return <h4 className={styles.content__title}>{title}</h4>;
}

export default ContentTitle;
