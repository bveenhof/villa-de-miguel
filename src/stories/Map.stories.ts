import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Map } from '../app/components';

const meta: Meta<typeof Map> = {
	title: "molecules / Map",
	component: Map,
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
	args: {
        villaMarker: {
            title: "Villa de Miguel",
            lat: 7.5631116,
            lng: 126.5391292,
            description: "<strong>This is our villa!</strong><br/>Tap 'View larger map' for cellular GPS routing.",
        },
        pointsOfInterest: [
            {
                title: "Aliwagwag Falls Ecopark",
                lat: 7.7042,
                lng: 126.2917,
                iconUrl: "http://google.com",
                description: "<strong>Aliwagwag Falls</strong><br/>Breathtaking multi-tiered waterfalls.",
            },
            {
                title: "Cateel Town Proper",
                lat: 7.7944,
                lng: 126.4534,
                iconUrl: "http://google.com",
                description: "<strong>Cateel Town Center</strong><br/>ATM hubs, local markets, and pharmacy needs.",
            },
        ],
        MapOptions: {
            center: {
                lat: 7.5631116,
                lng: 126.5391292
            },
            zoom: 12,
        }
	},
};
