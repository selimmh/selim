export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  links: {
    linkedin: string;
    github: string;
  };
};

export type Project = {
  title: string;
  description: string;
  github: string;
  live: string;
  disabled?: boolean;
};
