import React from "react";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/skills";
import DescAboutMe from "./assets/index/_about-me.md";

const avatar = require("./assets/index/avatar.png");

function Home(): JSX.Element {
  return (
    <Layout title="Home">
      <Hero />
      <main className="container container--fluid padding-vert--lg">
        <AboutMe avatar={avatar} AboutMeDesc={<DescAboutMe />} />
        <Skills />
      </main>
    </Layout>
  );
}

export default Home;
