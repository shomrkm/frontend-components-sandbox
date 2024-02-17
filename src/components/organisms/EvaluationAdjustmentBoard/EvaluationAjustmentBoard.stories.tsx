import 'smarthr-ui/smarthr-ui.css';

import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';

import { EvaluationAjustmentBoard } from './EvaluationAjustmentBoard';
import { Evaluation } from './types';

const meta = {
  title: 'Components/Organisms/EvaluationAdjustmentBoard',
  component: EvaluationAjustmentBoard<Evaluation>,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof EvaluationAjustmentBoard<Evaluation>>;

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
          departments: ['開発部'],
          employmentTypeName: 'アルバイト',
          jobTitleName: 'アルバイト',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['人事総務部'],
          employmentTypeName: '正社員',
          jobTitleName: '一般社員',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['人事総務部'],
          employmentTypeName: '正社員',
          jobTitleName: '一般社員',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['人事総務部'],
          employmentTypeName: '正社員',
          jobTitleName: '課長',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['人事総務部'],
          employmentTypeName: '正社員',
          jobTitleName: '一般社員',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['人事総務部'],
          employmentTypeName: '正社員',
          jobTitleName: '一般社員',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['開発部'],
          employmentTypeName: '正社員',
          jobTitleName: '一般社員',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['開発部'],
          employmentTypeName: '正社員',
          jobTitleName: '一般社員',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['開発部'],
          employmentTypeName: '正社員',
          jobTitleName: '課長',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['営業部'],
          employmentTypeName: '正社員',
          jobTitleName: '一般社員',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['営業部'],
          employmentTypeName: '正社員',
          jobTitleName: '一般社員',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['営業部'],
          employmentTypeName: '正社員',
          jobTitleName: '課長',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['営業部'],
          employmentTypeName: '正社員',
          jobTitleName: '一般社員',
          bizEstablishmentName: 'UTSUWA, inc.',
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
          departments: ['営業部'],
          employmentTypeName: '正社員',
          jobTitleName: '部長',
          bizEstablishmentName: 'UTSUWA, inc.',
          profile: 'https://iili.io/J16K3cF.png',
        },
        data: { rank: 'D' },
      },
    ],
    onUpdate: (data: Evaluation[]) => {
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
