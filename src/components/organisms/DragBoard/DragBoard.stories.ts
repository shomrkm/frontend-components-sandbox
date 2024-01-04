import 'smarthr-ui/smarthr-ui.css';

import type { Meta, StoryObj } from '@storybook/react';

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
      values: ['A', 'B', 'C'],
    },
    users: [
      {
        id: 'aaa',
        data: { name: '村上 翔太朗', rank: 'C', img: 'https://iili.io/H68O7yb.jpg' },
      },
      { id: 'bbb', data: { name: '三苫 薫', rank: 'A', img: 'https://iili.io/J5EtPWJ.png' } },
      { id: 'ccc', data: { name: '久保 建英', rank: 'A', img: 'https://iili.io/J5Eba3l.png' } },
      { id: 'ddd', data: { name: '遠藤 航', rank: 'B', img: 'https://iili.io/J5Epzss.png' } },
      { id: 'eee', data: { name: '冨安 健洋', rank: 'A', img: 'https://iili.io/J5G3Tjp.png' } },
      { id: 'fff', data: { name: '伊東 純也', rank: 'B', img: 'https://iili.io/J5G3Eu4.png' } },
      { id: 'ggg', data: { name: '上田 綺世', rank: 'B', img: 'https://iili.io/J5GFWOv.png' } },
    ],
    onUpdate: (data: User[]) => {
      alert(JSON.stringify(data));
      return true;
    },
  },
};
