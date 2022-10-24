import React from "react";
import { desc, facts } from "./info";
// import styles from "./index.module.css";

function About() {
  return (
    <section className="container container--fluid">
      <h2 className="">About me</h2>
      <p>{desc}</p>
      <p>Random or not so random facts about myself</p>
      <ul className="pills">
        {facts.map((fact) => (
          <li key={fact} className="pills__item ">
            {fact}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;
