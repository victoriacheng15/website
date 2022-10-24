import React from "react";
import Layout from "@theme/Layout";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "@site/src/components/ProjectCard";

interface Projects {
  title: string;
  code: string;
  demo: string;
  image: string;
  description: string;
  techs: string[];
}

const path = "./assets/projects/";

const projects: Projects[] = [
  {
    title: "Bubble Tea App",
    code: "https://github.com/victoriacheng15/bubble-tea-api",
    demo: "https://bubble-tea.up.railway.app/",
    image: require(`${path}bubble-tea-app.png`),
    description:
      "An app that users can submit their favourite combinations of tea and topping. The data will be sent to MongoDB. On the leaderboard page, it shows the amount of each drink that users had submitted.",
    techs: ["Express", "JavaScript", "MongoDB", "CSS"],
  },
  {
    title: "Country Information App",
    code: "https://github.com/victoriacheng15/fem-rest-countries-api",
    demo: "https://fem-rest-countries-api-vc.vercel.app/",
    image: require(`${path}country-information-app.png`),
    description:
      "An app where users can search for country information with the search bar or dropdown menu for regions. Each country card will show more details on the country",
    techs: ["React", "React Router", "Tailwind CSS"],
  },
  {
    title: "Space Tourism Website",
    code: "https://github.com/victoriacheng15/fem-space-tourism",
    demo: "https://fem-space-tourism-vc.vercel.app/",
    image: require(`${path}space-tourism-website.png`),
    description:
      "A tourism website that shows destinations information, the crew and the technologies for your space travel experience.",
    techs: ["React", "React Router", "Tailwind CSS"],
  },
];

const title = "Projects";
const description = "Projects that I have worked on";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid padding-vert--lg">
        <SectionTitle title={title} />
        <p>{description}</p>
        <div className="row">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
