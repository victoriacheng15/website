import React from "react";
import FormField from "./FormField";

function Form() {
  return (
    <form
      id="contact-form"
      method="POST"
      accept-charset="UTF-8"
      action="https://form.taxi/s/v281n9zc"
    >
      <FormField label="Your Name:" name="name" />
      <FormField label="Email:" name="email" />
      <FormField
        fieldType="textarea"
        label="Message:"
        name="message"
        rows={18}
      />
      <input type="text" name="_gotcha" style={{ display: "none" }} />
      <button type="submit" className="button button--lg button--primary">
        Send
      </button>
    </form>
  );
}

export default Form;
