import type { Meta, StoryObj } from '@storybook/react';

import StackedLightNav from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof StackedLightNav> = {
  title: 'Layout / Stacked / Light Nav',
  component: StackedLightNav,
};

export default meta;
type Story = StoryObj<typeof StackedLightNav>;

export const StackedLightNavStory: Story = {};
