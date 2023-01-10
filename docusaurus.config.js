// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwl");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

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
	plugins: [
		[
			"@docusaurus/plugin-ideal-image",
			{
				quality: 75,
				max: 2000,
				min: 500,
				steps: 4,
				disableInDev: false,
			},
		],
		async function myPlugin(context, options) {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(require("tailwindcss"));
					postcssOptions.plugins.push(require("autoprefixer"));
					return postcssOptions;
				},
			};
		},
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
					path: "blog",
					archiveBasePath: "/archive",
					postsPerPage: 5,
					blogSidebarCount: 20,
					showReadingTime: true,
					tagsBasePath: "/tags",
					feedOptions: {
						type: "all",
						copyright: `Copyright © ${new Date().getFullYear()} Victoria Cheng.`,
					},
				},
				theme: {
					customCss: [
						require.resolve("./src/css/custom.css"),
						require.resolve("./src/css/tailwind.css"),
					],
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
						"As a software developer, my goal is to continuously grow and improve my skills. I am interested in staying current with the latest tech trends and making meaningful contributions to open-source projects. My name is Victoria Cheng, and I am excited to use my passion and expertise to drive positive change through technology.",
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
			],
			navbar: {
				// title: "Victoria Cheng",
				logo: {
					alt: "victoriacheng15 logo",
					src: "img/victoriacheng15_logo.png",
				},
				items: [
					{ to: "/projects", label: "Projects", position: "right" },
					{ to: "/blog", label: "Blog", position: "right" },
					{
						type: "doc",
						docId: "intro",
						position: "right",
						label: "Journals",
					},
					{ to: "/contact", label: "Contact", position: "right" },
				],
			},
			footer: {
				style: "light",
				links: [],
				copyright: `© ${new Date().getFullYear()} Victoria Cheng | Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				magicComments: [
					{
						className: "code-block-error-line",
						line: "This will error",
					},
				],
			},
		}),
};

module.exports = config;
