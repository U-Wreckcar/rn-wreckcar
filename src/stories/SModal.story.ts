import type { Meta, StoryObj } from '@storybook/react';

import { SBtn } from '../components/common/ui/SBtn';
const meta: Meta<typeof SBtn> = {
  title: 'Example/Button',
  component: SBtn,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SBtn>;

export const Primary: Story = {
  args: {
    primary: false,
    size: 'md',
    label: 'button',
    onClick: () => {
      console.log('log');
    },
  },
};

export const Secondar: Story = {
  args: {
    primary: true,
    size: 'md',
    label: 'button',
    isDisabled: true,
  },
};

export const Large: Story = {
  args: {
    primary: false,
    size: 'lg',
    label: 'button',
  },
};

export const Small: Story = {
  args: {
    primary: true,
    size: 'sm',
    label: '+',
  },
};
