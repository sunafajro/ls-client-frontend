export type TNavigationLink = {
    label: string;
    path: string;
};

export type TNavigation = {
    navigationLinks: TNavigationLink[];
};

export type RouterProps = {
    isGuest: boolean;
};
