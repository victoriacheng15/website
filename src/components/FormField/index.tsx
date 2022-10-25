import React from "react";
import styles from "./index.module.css";

interface FormFieldProps {
  containerClass: string;
  label: string;
}

interface InputProps
  extends FormFieldProps,
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>> {
  fieldType: "input";
}

interface TextareaProps
  extends FormFieldProps,
    React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>> {
  fieldType: "textarea";
}

function FormField({
  containerClass = "margin-vert--md",
  fieldType = "input",
  label,
  ...props
}) {
  const id = props.id ?? `form_field_${props.name}`;

  return (
    <div className={containerClass}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className="margin-top--xs">
        {fieldType === "textarea" ? (
          <textarea
            id={id}
            required
            className={styles.field}
            {...(props as TextareaProps)}
          />
        ) : (
          <input
            id={id}
            type="text"
            required
            className={styles.field}
            {...(props as InputProps)}
          />
        )}
      </div>
    </div>
  );
}

export default FormField;
