import type { Meta, StoryObj } from '@storybook/react';

import { DragBoard } from './DragBoard';
import { User } from './types';

const meta = {
  title: 'Components/Organisms/DragBoard',
  component: DragBoard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DragBoard<User>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    column: {
      name: 'rank',
      values: ['A', 'B', 'C'],
    },
    users: [
      { id: 'aaa', data: { name: 'Shotaro Murakami', rank: 'A' } },
      { id: 'bbb', data: { name: 'Mats Hummels', rank: 'A' } },
      { id: 'ccc', data: { name: 'Jotn Smith', rank: 'C' } },
    ],
  },
};
