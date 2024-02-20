import type { Meta, StoryObj } from '@storybook/react';

import StackedBrandedNav from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof StackedBrandedNav> = {
  title: 'Layout / Stacked / Branded Nav',
  component: StackedBrandedNav,
};

export default meta;
type Story = StoryObj<typeof StackedBrandedNav>;

export const StackedBrandedNavStory: Story = {};
