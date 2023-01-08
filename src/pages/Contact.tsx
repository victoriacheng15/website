import React from "react";
import Layout from "@theme/Layout";
import { MainContainer, SectionTitle, Form } from "../components";

const title = "Let's contact!";

function Contact(): JSX.Element {
	return (
		<Layout title={title}>
			<MainContainer>
				<div className="max-w-3xl mx-auto">
					<SectionTitle title={`👋 ${title}`} />
					<Form />
				</div>
			</MainContainer>
		</Layout>
	);
}

export default Contact;
