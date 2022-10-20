import React from "react";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import SocialLinks from "../components/SocialLinks";

function Home(): JSX.Element {
  return (
    <Layout title="Home">
      <Hero />
      <SocialLinks />
    </Layout>
  );
}

export default Home;
