export interface listObj {
  title: string;
  date?: string;
  duration?: string;
  description?: string;
  projectOverview?: string;
  role?: string;
  responsibilities?: Array<string>;
}

export interface textbody {
  description1: string;
  highlight: Array<string>;
  description2: string;
}

export interface contactObj {
  url: string;
  imgSrc: string;
  title: string;
  alt: string;
}

export interface skillExperienceObj {
  primarySkill: string;
  categories: Array<skillCatObj>;
}

export interface skillCatObj {
  category: string;
  skills: Array<string>;
}

export interface navLinksObj {
  title: string;
  navLinkUrl: string;
  navIcon: string;
}

export interface sideNavfullObj {
  name: string;
  profileImgUrl: string;
  designation: string;
  resumeUrl: string;
  resumeIcon: string;
  navLinks: Array<navLinksObj>;
}
