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
          postsPerPage: 5,
          blogSidebarCount: 5,
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
      }),
    ],
  ],

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
            "JavaScript, TypeScript, React, React Router, Modejs, Express, MongoDB, Jest, Test-Drive Development, Frontend development, Full-Stack development, Tailwind CSS, SASS",
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
            label: "Resources",
          },
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/contact", label: "Contact", position: "right" },
        ],
      },
      footer: {
        style: "light",
        links: [
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
          {
            label: "Polywork",
            href: "https://www.polywork.com/victoriacheng15",
          },
        ],
        copyright: `© ${new Date().getFullYear()} Victoria Cheng and Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
