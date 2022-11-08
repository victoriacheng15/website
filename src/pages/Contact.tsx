import React from "react";
import Layout from "@theme/Layout";
import MainContainer from "../components/MainContainer";
import SectionTitle from "../components/SectionTitle";
import Form from "../components/Form";

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
