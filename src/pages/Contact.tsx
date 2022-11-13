import React from "react";
import Layout from "@theme/Layout";
import { MainContainer, SectionTitle, Form } from "../components";

const title = "Let's contact!";

function Contact(): JSX.Element {
  return (
    <Layout title={title}>
      <MainContainer>
        <div className="row">
          <div className="col col--6 col--offset-3">
            <SectionTitle title={`👋 ${title}`} />
            <Form />
          </div>
        </div>
      </MainContainer>
    </Layout>
  );
}

export default Contact;
