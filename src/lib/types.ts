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

export type ProjectCategory = 'mobile' | 'desktop' | 'web' | 'full stack' | 'hardware' | 'personal' | 'work';

interface LinkType {
    name: string;
    link: string;
}

type URLPath =
    | 'smart-water-control'
    | 'frid'
    | 'todoaholic'
    | 'cruiseaholic'
    | 'knowt-mobile'
    | 'personal-website'
    | 'snitt'
    | 'tic-tac-toe'
    | 'den-store-bokmalsordboka'
    | 'fast-rhymes'
    | 'hunnor'
    | 'ev-calculator'
    | 'g-eazy-discography'
    | 'electric-longboard'
    | 'home-automation'
    | 'privatek'
    | 'esk8-calculator'
    | 'autonomous-robot'
    | 'fpv-racing-drone-v2'
    | 'camera-drone'
    | 'fpv-racing-drone';

type TermsType = {
    title: string;
    content: string;
};

export interface ProjectType {
    path: URLPath;
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
    privacy?: string[];
    terms?: TermsType[];
}
