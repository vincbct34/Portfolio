import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
    },
    {
        id: 2,
        url: '/about',
        text: 'About',
    },
    {
        id: 3,
        url: '/projects',
        text: 'Projects',
    },
    {
        id: 4,
        url: '/contact',
        text: 'Contact',
    },
];

export const social = [
    {
        id: 1,
        url: 'https://github.com/vincbct34',
        icon: <FaGithub />,
    },
    {
        id: 2,
        url: 'https://www.linkedin.com/in/vincent-bichat/',
        icon: <FaLinkedin />,
    },
    {
        id: 3,
        url: 'https://www.facebook.com/vincent.bichat.3/',
        icon: <FaFacebook />,
    },
];