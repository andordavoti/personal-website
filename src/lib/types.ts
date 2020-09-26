export type ThemeType = 'light' | 'dark';

export interface SocialLinkType {
    email: string;
    linkedin: string;
    github: string;
}

interface SkillType {
    name: string;
    link: string;
    imgUrl: string;
}

export interface SkillsType {
    development: SkillType[];
    design: SkillType[];
}

export type ProjectCategory = 'mobile' | 'web' | 'hardware' | 'personal' | 'work';

interface LinkType {
    name: string;
    link: string;
}

export interface ProjectType {
    path: string; // TODO: explicit path
    name: string;
    date: string;
    subtitle: string;
    description: string[];
    categories: ProjectCategory[];
    imgUrl: string;
    appStoreUrl: null | string;
    playStoreUrl: null | string;
    webAppUrl: null | string;
    links: null | LinkType[];
    technologies: null | LinkType[];
}
