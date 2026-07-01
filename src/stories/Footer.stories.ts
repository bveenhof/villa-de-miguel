import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Footer } from '../app/components';

const meta: Meta<typeof Footer> = {
	title: "organisms / Footer",
	component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;


export const Default: Story = {
	args: {
        links: {
            title: 'Booking',
            paragraph: 'Book our villa on these platforms.',
            linkList: [
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
            ],
        },
        location: {
            title: 'Location',
            paragraph: 'Somewhere in the world, but we are not sure where exactly.',
        },
        socials: {
            title: 'Follow us on',
            socialLinks: [
                {
                    label: 'Facebook', 
                    href: 'https://www.facebook.com',
                    icon: { src: '/icon-facebook.svg', alt: 'Facebook' },
                },
                {
                    label: 'Instagram', 
                    href: 'https://www.instagram.com',
                    icon: { src: '/icon-instagram.svg', alt: 'Instagram' },
                },
                {
                    label: 'YouTube', 
                    href: 'https://www.youtube.com',
                    icon: { src: '/icon-youtube.svg', alt: 'YouTube' },
                },
            ],
        },
	},
};
