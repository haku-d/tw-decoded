import type { Meta, StoryObj } from '@storybook/react';

import StackedDarkOverlap from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof StackedDarkOverlap> = {
  title: 'Layout / Stacked / Dark Overlap',
  component: StackedDarkOverlap,
};

export default meta;
type Story = StoryObj<typeof StackedDarkOverlap>;

export const StackedDarkOverlapStory: Story = {};
