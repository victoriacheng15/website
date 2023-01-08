import React from "react";

function FormField({ fieldType = "input", label, ...props }) {
	const id = props.id ?? `form_field_${props.name}`;

	return (
		<div className="mb-4">
			{label && (
				<label htmlFor={id} className="text-2xl">
					{label}
				</label>
			)}
			{fieldType === "input" ? (
				<input
					id={id}
					type="text"
					required={true}
					className="w-full rounded-lg border-none text-lg py-2 px-4"
					{...props}
				/>
			) : (
				<textarea
					id={id}
					required={true}
					className="w-full rounded-lg border-none text-lg py-2 px-4"
					{...props}
				/>
			)}
		</div>
	);
}

export default FormField;
