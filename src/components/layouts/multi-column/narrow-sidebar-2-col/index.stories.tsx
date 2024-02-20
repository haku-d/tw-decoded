import type { Meta, StoryObj } from '@storybook/react';

import NarrowSidebar2Col from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof NarrowSidebar2Col> = {
  title: 'Layout / Multi-Column / Full-width with narrow sidebar',
  component: NarrowSidebar2Col,
};

export default meta;
type Story = StoryObj<typeof NarrowSidebar2Col>;

export const NarrowSidebar2ColStory: Story = {};
