import type { Meta, StoryObj } from '@storybook/react';

import StackedBrandedOverlap from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof StackedBrandedOverlap> = {
  title: 'Layout / Stacked / Branded Overlap',
  component: StackedBrandedOverlap,
};

export default meta;
type Story = StoryObj<typeof StackedBrandedOverlap>;

export const StackedBrandedOverlapStory: Story = {};
