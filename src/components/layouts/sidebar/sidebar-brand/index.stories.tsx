import type { Meta, StoryObj } from '@storybook/react';

import SidebarBrand from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SidebarBrand> = {
  title: 'Layout / Sidebar / Brand sidebar with header',
  component: SidebarBrand,
};

export default meta;
type Story = StoryObj<typeof SidebarBrand>;

export const SidebarBrandStory: Story = {};
