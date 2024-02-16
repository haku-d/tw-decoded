import type { Meta, StoryObj } from '@storybook/react';

import BrandSidebar from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof BrandSidebar> = {
  title: 'Layout / Sidebar / Brand sidebar with header',
  component: BrandSidebar,
};

export default meta;
type Story = StoryObj<typeof BrandSidebar>;

export const BrandSidebarStory: Story = {};
