import type { Meta, StoryObj } from '@storybook/react';

import { SBtn as Button } from '../components/common/ui/SBtn';
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    size: 'md',
    children: 'children',
    onClick: () => {
      console.log('log');
    },
  },
};

export const Secondar: Story = {
  args: {
    primary: true,
    size: 'md',
    children: 'secondar',
  },
};

export const Large: Story = {
  args: {
    primary: false,
    size: 'lg',
    children: '로그인',
  },
};

export const Small: Story = {
  args: {
    primary: true,
    size: 'sm',
    children: 'small',
  },
};
