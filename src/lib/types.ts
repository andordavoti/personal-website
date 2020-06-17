export type ThemeType = 'light' | 'dark';

export type SocialLinkType = 'email' | 'linkedin' | 'github';

type Link = {
    name: string;
    link: string;
};

export interface ProjectType {
    date: string;
    name: string;
    subtitle: string;
    imgUrl: string[];
    description: string;
    links: Link[];
    technologies: Link[];
    appStoreUrl: string;
    playStoreUrl: string;
}
