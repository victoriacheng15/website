import React from "react";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/skills";

function Home(): JSX.Element {
  return (
    <Layout title="Home">
      <Hero />
      <main className="container container--fluid padding-vert--lg">
        <AboutMe />
        <Skills />
      </main>
    </Layout>
  );
}

export default Home;
