export type ThemeType = 'light' | 'dark';

export type SocialLinkType = 'email' | 'linkedin' | 'github';

export type LinkType = {
    name: string;
    link: string;
};

export type TechnologyType = {
    name: string;
    link: string;
};

export interface ProjectType {
    [id: string]: ProjectObjType;
}

export interface ProjectObjType {
    id: string;
    date: string;
    name: string;
    subtitle: string;
    imgUrl: string;
    description: string;
    links: LinkType[];
    technologies: TechnologyType[];
    appStoreUrl: string;
    playStoreUrl: string;
}
