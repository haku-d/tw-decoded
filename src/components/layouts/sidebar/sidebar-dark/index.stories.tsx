import type { Meta, StoryObj } from '@storybook/react';

import SidebarDark from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SidebarDark> = {
  title: 'Layout / Sidebar / Dark sidebar with header',
  component: SidebarDark,
};

export default meta;
type Story = StoryObj<typeof SidebarDark>;

export const SidebarDarkStory: Story = {};
