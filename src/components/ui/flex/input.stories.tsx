import type { Meta, StoryObj } from '@storybook/react';

import Flex from '.';

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  id: 'Components/flex',
  component: Flex,
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
type Story = StoryObj<typeof Flex>;

export const FlexStory: Story = {};
