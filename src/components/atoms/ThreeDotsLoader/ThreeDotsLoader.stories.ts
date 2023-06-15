import type { Meta, StoryObj } from '@storybook/react';

import { ThreeDotsLoader } from './ThreeDotsLoader';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Atoms/ThreeDotsLoader',
  component: ThreeDotsLoader,
  tags: ['autodocs'],
} satisfies Meta<typeof ThreeDotsLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
