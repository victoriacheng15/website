import React from "react";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";

function Home(): JSX.Element {
  return (
    <Layout title="Home">
      <Hero />
      <main>
        <h2>main</h2>
      </main>
    </Layout>
  );
}

export default Home;
