import React from "react";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";

function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Victora Cheng - Software Developer based in Calgary, Canada with knowledge of JavaScript, React, Nodejs, Express, Tailwind CSS, etc."
    >
      <Hero />
      <main>
        <h2>main</h2>
      </main>
    </Layout>
  );
}

export default Home;
