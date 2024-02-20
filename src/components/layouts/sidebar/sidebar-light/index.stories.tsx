import type { Meta, StoryObj } from '@storybook/react';

import SidebarLight from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SidebarLight> = {
  title: 'Layout / Sidebar / Light sidebar with header',
  component: SidebarLight,
};

export default meta;
type Story = StoryObj<typeof SidebarLight>;

export const SidebarLightStory: Story = {};
