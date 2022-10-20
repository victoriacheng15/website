
  interface SocialLinksProps {
    [key: string]: SocialLinkProps;
  }

  type SocialTitles = "linkedin" | "twitter" | "github" | "polywork";

  interface SocialLinkProps {
    title: SocialTitles;
    link: string;
  }

  export const socialList: SocialLinksProps = {
    github: {
      title: "github",
      link: "https://github.com/victoriacheng15",
    },
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/victoriacheng15/",
    },
    twitter: {
      title: "twitter",
      link: "https://www.twitter.com/viktoriacheng15/",
    },
    polywork: {
      title: "polywork",
      link: "https://www.polywork.com/victoriacheng15",
    },
  };