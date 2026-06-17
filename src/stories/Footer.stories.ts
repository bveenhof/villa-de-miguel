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


// const meta = {
//   title: 'Organisms/Footer',
//   component: Footer,
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   parameters: {
//     // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
//     layout: 'fullscreen',
//   },
//   args: {
//     links: {
//       title: 'Useful Links',
//       linkList: [
//         { label: 'Home', href: '/' },
//         { label: 'About', href: '/about' },
//         { label: 'Contact', href: '/contact' },
//       ],
//     },
//   },
// } satisfies Meta<typeof Footer>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const LoggedIn: Story = {
//   args: {
//     user: {
//       name: 'Jane Doe',
//     },
//   },
// };

// export const LoggedOut: Story = {};
