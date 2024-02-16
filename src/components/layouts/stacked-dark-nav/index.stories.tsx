import type { Meta, StoryObj } from '@storybook/react';

import StackedDarkNav from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof StackedDarkNav> = {
  title: 'Layout / Stacked / Dark Nav',
  component: StackedDarkNav,
};

export default meta;
type Story = StoryObj<typeof StackedDarkNav>;

export const StackedDarkNavStory: Story = {};
