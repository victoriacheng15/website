interface List {
  [key: string]: Skill;
}

interface Skill {
  title: string;
  address: string;
}

export const skillsList: List = {
  typscript: {
    title: "TypeScript",
    address:
      "https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white",
  },
  javascript: {
    title: "TypeScript",
    address:
      "https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black",
  },
  jest: {
    title: "Jest",
    address:
      "https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white",
  },
  react: {
    title: "React",
    address:
      "https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black",
  },
  reactRouter: {
    title: "React Router",
    address:
      "https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white",
  },
  node: {
    title: "Node.js",
    address:
      "https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white",
  },
  express: {
    title: "Express",
    address:
      "https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white",
  },
  sass: {
    title: "SASS",
    address:
      "https://img.shields.io/badge/Sass-CC6699.svg?style=for-the-badge&logo=Sass&logoColor=white",
  },
  tailwind: {
    title: "Tailwind CSS",
    address:
      "https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white",
  },
  mongo: {
    title: "MongoDB",
    address:
      "https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white",
  },
};
