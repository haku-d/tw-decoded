import type { Meta, StoryObj } from '@storybook/react';

import StackedLightNav2 from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof StackedLightNav2> = {
  title: 'Layout / Stacked / Light Nav 2',
  component: StackedLightNav2,
};

export default meta;
type Story = StoryObj<typeof StackedLightNav2>;

export const StackedLightNav2Story: Story = {};
