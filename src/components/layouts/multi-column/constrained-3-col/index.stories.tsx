import type { Meta, StoryObj } from '@storybook/react';

import Constrained2Col from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Constrained2Col> = {
  title: 'Layout / Multi-Column / Constrained three column',
  component: Constrained2Col,
};

export default meta;
type Story = StoryObj<typeof Constrained2Col>;

export const Constrained2ColStory: Story = {};
