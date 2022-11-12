// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Victoria Cheng",
  tagline:
    "A software developer and blogger interested in personal growth, tech trends, open-source and mechanical keyboards! 😊",
  url: "https://victoriacheng15.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  customFields: {
    avatar: "./img/avatar.webp",
    facts: [
      "Deaf",
      "Gamer",
      "Love ☕ coffee and 🍵 tea",
      "Known 3 languages - Mandarin, English, and American Sign Language",
    ],
    projects: [
      {
        title: "Bubble Tea App",
        code: "https://github.com/victoriacheng15/bubble-tea-api#redme",
        demo: "https://bubble-tea.up.railway.app/",
        image: "./img/projects/bubble-tea-app.png",
        description:
          "An app that users can submit their favourite combinations of tea and topping. The data will be sent to MongoDB. On the leaderboard page, it shows the amount of each drink that users had submitted.",
        techs: ["Express", "JavaScript", "MongoDB", "CSS"],
      },
      {
        title: "Country Information App",
        code: "https://github.com/victoriacheng15/fem-rest-countries-api#readme",
        demo: "https://fem-rest-countries-api-vc.vercel.app/",
        image: "./img/projects/country-information-app.png",
        description:
          "An app where users can search for country information with the search bar or dropdown menu for regions. Each country card will show more details on the country",
        techs: ["React", "React Router", "Tailwind CSS"],
      },
      {
        title: "Space Tourism Website",
        code: "https://github.com/victoriacheng15/fem-space-tourism#readme",
        demo: "https://fem-space-tourism-vc.vercel.app/",
        image: "./img/projects/space-tourism-website.png",
        description:
          "A tourism website that shows destinations information, the crew and the technologies for your space travel experience.",
        techs: ["React", "React Router", "Tailwind CSS"],
      },
    ],
  },
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 2000,
        min: 500,
        steps: 4,
        disableInDev: false,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 10,
          blogSidebarCount: 10,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Victoria Cheng.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        gtag: {
          trackingID: "G-V6GVGWVHB9",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          name: "keywords",
          content:
            "JavaScript, TypeScript, React, React Router, Nodejs, Express, MongoDB, Jest, Test-Drive Development, Frontend development, Full-Stack development, Tailwind CSS, SASS",
        },
        {
          name: "description",
          content:
            "I am a software developer interested in personal growth, tech trends and open-source",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      // announcementBar: {
      //   id: "announcement-bar",
      //   content:
      //     'A new blog has published! Check out <a href="/blog">here</a>! Don\'t forget to recharge yourself over the weekend',
      //   isCloseable: true,
      // },
      navbar: {
        title: "Victoria Cheng",
        logo: {
          alt: "VC Logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/projects", label: "Projects", position: "right" },
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Journals",
          },
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/contact", label: "Contact", position: "right" },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "See mistake? Let me know!",
            items: [
              {
                label: "Raise an issue here",
                href: "https://github.com/victoriacheng15/website/issues",
              },
            ],
          },
          {
            title: "Find Me!",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/victoriacheng15",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/victoriacheng15/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/viktoriacheng15",
              },
            ],
          },
          {
            title: "More...",
            items: [
              {
                label: "Polywork",
                href: "https://www.polywork.com/victoriacheng15",
              },
              {
                label: "Hashnode",
                href: "https://victoriacheng15.hashnode.dev/",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Victoria Cheng | Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
