import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { ContentSection } from '../app/components';

const meta = {
  title: 'organisms / ContentSection',
  component: ContentSection,
  args: {
    title: "Welcome to this villa",
    paragraph: "This is a simple content section, aligned to the left (default).",
  },
} satisfies Meta<typeof ContentSection>;

export default meta;
type Story = StoryObj<typeof ContentSection>;

export const Default: Story = {
  args: {
    title: "Welcome to this villa",
    paragraph: "This is a simple content section, it contains some content.",
    images: [
      { src: "https://picsum.photos/900/1200", alt: "Image 1" },
    ],
  },
};

export const MultipleImages: Story = {
  args: {
    title: "Welcome to this villa",
    paragraph: "This is a simple content section, with content and multiple images.",
    images: [
      { src: "https://picsum.photos/900/1200", alt: "Image 1" },
      { src: "https://picsum.photos/900/1260", alt: "Image 2" },
    ],
  },
};
