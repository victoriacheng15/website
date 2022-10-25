import React from "react";
import Layout from "@theme/Layout";
import SectionTitle from "../components/SectionTitle";
import FormField from "../components/FormField";

const title = "Contact";

function Contact() {
  return (
    <Layout title={title}>
      <main className="container container--fluid padding-vert--lg">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <SectionTitle title={`👋 ${title}`} />
            <form id="ft-form" method="POST" accept-charset="UTF-8" action="https://form.taxi/s/v281n9zc">
              <FormField label="Your Name:" name="name" />
              <FormField label="Email:" name="email" />
              <FormField
                fieldType="textarea"
                label="Message:"
                name="message"
                rows={18}
              />
              <input type="text" name="_gotcha" style={{display: "none"}} />
              <button
                type="submit"
                className="button button--lg button--primary"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Contact;
