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
		projects: [
			{
				title: "Bubble Tea App",
				code: "https://github.com/victoriacheng15/bubble-tea-api#readme",
				demo: "https://bubble-tea.up.railway.app/",
				image: "./img/projects/bubble-tea-app.webp",
				description:
					"Developed an app where users can submit their favorite bubble tea combinations and view a leaderboard that ranks the popularity of these combinations. Whether you're a bubble tea aficionado or just looking for some inspiration for your next drink, this app is sure to satisfy your cravings.",
				techs: ["Express", "JavaScript", "MongoDB", "CSS"],
			},
			{
				title: "Country Information App",
				code: "https://github.com/victoriacheng15/rest-countries-api-ts#readme",
				demo: "https://rest-countries-api-ts-vc.netlify.app/",
				image: "./img/projects/country-information-app.webp",
				description:
					"Developed an app that displays short information about various countries on cards, with pagination to navigate between them. Each card leads to a separate page with more detailed information about the corresponding country. This app is a convenient and easy way to learn about the world around us.",
				techs: [
					"TypeScript",
					"React",
					"React Router",
					"Tailwind CSS",
					"Testing Library",
				],
			},
			{
				title: "Space Tourism Website",
				code: "https://github.com/victoriacheng15/fem-space-tourism#readme",
				demo: "https://fem-space-tourism-vc.vercel.app/",
				image: "./img/projects/space-tourism-website.webp",
				description:
					"Our tourism website showcases information about various destinations, the crew, and the technologies available for an out-of-this-world space travel experience. Explore our website to learn more about the exciting opportunities that await you on your journey.",
				techs: ["React", "React Router", "Tailwind CSS"],
			},
		],
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
						"As a software developer, my goal is to continuously grow and improve my skills. I am interested in staying current with the latest tech trends and making meaningful contributions to open-source projects. My name is Victoria Cheng, and I am excited to use my passion and expertise to drive positive change through technology.",
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
							{
								label: "Archive blogs",
								href: "/blog/archive",
							},
						],
					},
				],
				copyright: `© ${new Date().getFullYear()} Victoria Cheng | Built with Docusaurus.`,
			},
			prism: {
				theme: require('prism-react-renderer/themes/nightOwl'),
				darkTheme: require('prism-react-renderer/themes/nightOwl'),
				magicComments: [
					{
						className: 'code-block-error-line',
						line: 'This will error',
					},
				]
			},
		}),
};

module.exports = config;
