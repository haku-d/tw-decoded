import type { Meta, StoryObj } from '@storybook/react';

import Page from './page';

const meta: Meta<typeof Page> = {
  title: 'Forms/Input',
  id: 'Forms/Input',
  component: Page,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const ButtonStory: Story = {};
