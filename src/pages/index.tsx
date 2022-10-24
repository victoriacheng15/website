import React from "react";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import SocialLinks from "../components/SocialLinks";
import Skills from "../components/skills";

function Home(): JSX.Element {
  return (
    <Layout title="Home">
      <Hero />
      <AboutMe />
      <SocialLinks />
      <Skills />
    </Layout>
  );
}

export default Home;
