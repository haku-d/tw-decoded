import type { Meta, StoryObj } from '@storybook/react';

import StackedTwoRowNav from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof StackedTwoRowNav> = {
  title: 'Layout / Stacked / Two Row Nav',
  component: StackedTwoRowNav,
};

export default meta;
type Story = StoryObj<typeof StackedTwoRowNav>;

export const StackedTwoRowNavStory: Story = {};
