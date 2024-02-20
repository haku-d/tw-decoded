import type { Meta, StoryObj } from '@storybook/react';

import Sidebar2Column from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Sidebar2Column> = {
  title: 'Layout / Multi-Column / Full-width secondary column on right',
  component: Sidebar2Column,
};

export default meta;
type Story = StoryObj<typeof Sidebar2Column>;

export const Sidebar2ColumnStory: Story = {};
