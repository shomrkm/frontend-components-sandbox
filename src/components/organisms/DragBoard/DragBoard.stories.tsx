import 'smarthr-ui/smarthr-ui.css';

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DragBoard } from './DragBoard';
import { User } from './types';

const meta = {
  title: 'Components/Organisms/DragBoard',
  component: DragBoard<User>,
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
      values: ['未設定', 'A', 'B', 'C', 'D'],
    },
    users: [
      {
        id: uuidv4(),
        data: { name: '村上 翔太朗', rank: 'C', img: 'https://iili.io/H68O7yb.jpg' },
      },
      {
        id: uuidv4(),
        data: { name: '須磨 英子', rank: 'C', img: 'https://iili.io/J146hUF.png' },
      },
      {
        id: uuidv4(),
        data: { name: '須磨 英知', rank: 'C', img: 'https://iili.io/J14P2bj.png' },
      },
    ],
    onUpdate: (data: User[]) => {
      alert(JSON.stringify(data));
      return true;
    },
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ margin: '1rem', backgroundColor: '#F7F6F4' }}>
          <Story />
        </div>
      );
    },
  ],
};
