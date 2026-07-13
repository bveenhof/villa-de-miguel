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
            lat: 7.5631116,
            lng: 126.5391292,
            content: "<strong>Villa de Miguel</strong><br/> This is our villa!",
        },
        pointsOfInterest: [
            {
                lat: 7.7042,
                lng: 126.2917,
                content: "<strong>Aliwagwag Falls</strong><br/>Breathtaking multi-tiered waterfalls.",
            },
            {
                lat: 7.7944,
                lng: 126.4534,
                content: "<strong>Cateel Town Center</strong><br/>ATM hubs, local markets, and pharmacy needs.",
            },
        ],
        MapOptions: {
            center: {
                lat: 7.5631116,
                lng: 126.5391292
            },
            zoom: 12,
            mapId: 'villa-demo-map',
        }
	},
};
