import { v4 as uuidv4 } from "uuid";

export type FooterMenuItem = {
    id: string;
    href: string;
    title: string;
    active: boolean;
};

export const mainMenuItems: FooterMenuItem[] = [
    {
        id: uuidv4(),
        href: '#',
        title: 'Blog',
        active: false,
    },
    {
        id: uuidv4(),
        href: '#',
        title: 'Ventas al mayor',
        active: false,
    },
    {
        id: uuidv4(),
        href: '#',
        title: 'Tienda',
        active: true,
    },
];

export const secondaryMenuItems: FooterMenuItem[] = [
    {
        id: uuidv4(),
        href: '#',
        title: 'Privacidad',
        active: false,
    },
    {
        id: uuidv4(),
        href: '#',
        title: 'Términos y condiciones',
        active: false,
    },
];