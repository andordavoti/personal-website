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

export type ProjectCategory = 'mobile' | 'desktop' | 'web' | 'hardware' | 'personal' | 'work';

interface LinkType {
    name: string;
    link: string;
}

type URLPath =
    | 'todoaholic'
    | 'knowt_mobile'
    | 'personal_website'
    | 'snitt'
    | 'tic_tac_toe'
    | 'den_store_bokmalsordboka'
    | 'fast_rhymes'
    | 'hunnor'
    | 'ev_calculator'
    | 'g_eazy_discography'
    | 'electric_longboard'
    | 'home_automation'
    | 'privatek'
    | 'esk8_calculator'
    | 'autonomous_robot'
    | 'fpv_racing_drone_v2'
    | 'camera_drone'
    | 'fpv_racing_drone';

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
