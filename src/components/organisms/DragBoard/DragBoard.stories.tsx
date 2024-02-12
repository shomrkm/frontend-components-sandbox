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
        data: { name: '須磨 英子', rank: 'A', img: 'https://iili.io/J146hUF.png' },
      },
      {
        id: uuidv4(),
        data: { name: '須磨 英知', rank: '未設定', img: 'https://iili.io/J14P2bj.png' },
      },
      {
        id: uuidv4(),
        data: { name: '草野 栄一郎', rank: 'B', img: 'https://iili.io/J14pbS4.png' },
      },
      {
        id: uuidv4(),
        data: { name: '岩下 香澄', rank: 'B', img: 'https://iili.io/J14y9NS.png' },
      },
      {
        id: uuidv4(),
        data: { name: '島袋 月代', rank: 'B', img: 'https://iili.io/J169bu2.png' },
      },
      {
        id: uuidv4(),
        data: { name: '永山 侑太郎', rank: 'B', img: 'https://iili.io/J16HquV.png' },
      },
      {
        id: uuidv4(),
        data: { name: '上原 玲子', rank: 'C', img: 'https://iili.io/J16Hon1.png' },
      },
      {
        id: uuidv4(),
        data: { name: 'Robert Smith', rank: 'C', img: 'https://iili.io/J16HTFa.png' },
      },
      {
        id: uuidv4(),
        data: { name: '大和 真', rank: 'D', img: 'https://iili.io/J16HatI.png' },
      },
      {
        id: uuidv4(),
        data: { name: '松原 英太', rank: 'D', img: 'https://iili.io/J16Hlnt.png' },
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
        <div style={{ margin: '0.25rem', padding: '1rem', backgroundColor: '#F7F6F4' }}>
          <Story />
        </div>
      );
    },
  ],
};
