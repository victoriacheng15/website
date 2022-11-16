import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

function FormField({ fieldType = "input", label, ...props }) {
	const id = props.id ?? `form_field_${props.name}`;

	return (
		<div className="margin-vert--md">
			{label && (
				<label htmlFor={id} className={styles.label}>
					{label}
				</label>
			)}
			{fieldType === "input" ? (
				<input
					id={id}
					type="text"
					required={true}
					className={clsx(
						"padding-horiz--md",
						"padding-vert--sm",
						styles.field,
					)}
					{...props}
				/>
			) : (
				<textarea
					id={id}
					required={true}
					className={clsx(
						"padding-horiz--md",
						"padding-vert--sm",
						styles.field,
					)}
					{...props}
				/>
			)}
		</div>
	);
}

export default FormField;
