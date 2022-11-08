import React from "react";
import Layout from "@theme/Layout";
import MainContainer from "../components/MainContainer";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

function Home(): JSX.Element {
  return (
    <Layout title="Home">
      <Hero />
      <MainContainer>
        <AboutMe />
        <Skills />
      </MainContainer>
    </Layout>
  );
}

export default Home;
