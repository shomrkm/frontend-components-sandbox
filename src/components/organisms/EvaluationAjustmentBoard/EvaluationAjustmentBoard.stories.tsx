import 'smarthr-ui/smarthr-ui.css';

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EvaluationAjustmentBoard } from './EvaluationAjustmentBoard';
import { Crew } from './types';

const meta = {
  title: 'Components/Organisms/EvaluationAjustmentBoard',
  component: EvaluationAjustmentBoard<Crew>,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof EvaluationAjustmentBoard<Crew>>;

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
        crew: {
          id: uuidv4(),
          empCode: '999',
          firstName: '翔太朗',
          lastName: '村上',
          profile: 'https://iili.io/H68O7yb.jpg',
        },
        data: { rank: 'C' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '998',
          firstName: '英子',
          lastName: '須磨',
          profile: 'https://iili.io/J146hUF.png',
        },
        data: { rank: 'A' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '997',
          firstName: '英知',
          lastName: '須磨',
          profile: 'https://iili.io/J14P2bj.png',
        },
        data: { rank: '未設定' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '001',
          firstName: '栄一郎',
          lastName: '草野',
          profile: 'B',
        },
        data: { rank: 'https://iili.io/J14pbS4.png' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '002',
          firstName: '香澄',
          lastName: '岩下',
          profile: 'https://iili.io/J14y9NS.png',
        },
        data: { rank: 'A' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '003',
          firstName: '月代',
          lastName: '島袋',
          profile: 'https://iili.io/J169bu2.png',
        },
        data: { rank: 'B' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '004',
          firstName: '侑太郎',
          lastName: '永山',
          profile: 'https://iili.io/J16HquV.png',
        },
        data: { rank: 'B' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '005',
          firstName: '玲子',
          lastName: '上原',
          profile: 'https://iili.io/J16Hon1.png',
        },
        data: { rank: 'B' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '006',
          firstName: 'Smith',
          lastName: 'Robert',
          profile: 'https://iili.io/J16HTFa.png',
        },
        data: { rank: 'B' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '007',
          firstName: '真',
          lastName: '大和',
          profile: 'https://iili.io/J16HatI.png',
        },
        data: { rank: 'B' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '008',
          firstName: '英太',
          lastName: '松原',
          profile: 'https://iili.io/J16Hlnt.png',
        },
        data: { rank: 'C' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '009',
          firstName: '雄一',
          lastName: '阿久津',
          profile: 'https://iili.io/J16FpZQ.png',
        },
        data: { rank: 'C' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '010',
          firstName: 'ひなこ',
          lastName: '高美',
          profile: 'https://iili.io/J16K9nV.png',
        },
        data: { rank: 'C' },
      },
      {
        crew: {
          id: uuidv4(),
          empCode: '011',
          firstName: '二郎',
          lastName: '朝倉',
          profile: 'https://iili.io/J16K3cF.png',
        },
        data: { rank: 'D' },
      },
    ],
    onUpdate: (data: Crew[]) => {
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
