import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import styles from "./index.module.css";

interface FormFieldProps {
  containerClass: string;
  label: string;
}

type InputEle = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>>;
interface InputProps extends FormFieldProps, InputEle {
  fieldType: "input";
}

type TextareaEle = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>
>;
interface TextareaProps extends FormFieldProps, TextareaEle {
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
            required={true}
            className={styles.field}
            {...(props as TextareaProps)}
          />
        ) : (
          <input
            id={id}
            type="text"
            required={true}
            className={styles.field}
            {...(props as InputProps)}
          />
        )}
      </div>
    </div>
  );
}

export default FormField;
