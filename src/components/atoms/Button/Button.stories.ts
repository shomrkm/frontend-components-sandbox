import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'string',
      description: 'Button types',
      defaultValue: 'primary',
    },
    size: {
      control: 'string',
      description: 'Button size',
      defaultValue: 'sm',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Button',
  },
};

export const Inverse: Story = {
  args: {
    variant: 'inverse',
    size: 'sm',
    children: 'Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'sm',
    children: 'Button',
  },
};

export const XSmall: Story = {
  args: {
    variant: 'primary',
    size: 'xs',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Button',
  },
};

export const Middle: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Button',
  },
};
