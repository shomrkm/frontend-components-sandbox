import type { Meta, StoryObj } from '@storybook/react';

import { ImageList } from './ImageList';

const images = [
  {
    id: 1,
    src: 'https://picsum.photos/id/10/200/300',
    alt: 'test',
  },
  {
    id: 2,
    src: 'https://picsum.photos/id/20/200/300',
    alt: 'test',
  },
  {
    id: 3,
    src: 'https://picsum.photos/id/30/200/300',
    alt: 'test',
  },
  {
    id: 4,
    src: 'https://picsum.photos/id/40/200/300',
    alt: 'test',
  },
  {
    id: 5,
    src: 'https://picsum.photos/id/50/200/300',
    alt: 'test',
  },
  {
    id: 6,
    src: 'https://picsum.photos/id/60/200/300',
    alt: 'test',
  },
  {
    id: 7,
    src: 'https://picsum.photos/id/70/200/300',
    alt: 'test',
  },
];

const meta = {
  title: 'Components/Molecules/ImageList',
  component: ImageList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ margin: '150px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ImageList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { images: images },
};
