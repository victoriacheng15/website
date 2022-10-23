type SocialTitles = "linkedin" | "twitter" | "github" | "polywork";

interface SocialLinks {
  title: SocialTitles;
  link: string;
}

export const socialList: SocialLinks[] = [
  {
    title: "github",
    link: "https://github.com/victoriacheng15",
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/victoriacheng15/",
  },
  {
    title: "twitter",
    link: "https://www.twitter.com/viktoriacheng15/",
  },
  {
    title: "polywork",
    link: "https://www.polywork.com/victoriacheng15",
  },
];
