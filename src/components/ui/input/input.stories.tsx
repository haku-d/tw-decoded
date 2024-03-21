import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  id: 'Components/input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InlineInputStory: Story = {
  args: {
    type: 'email',
    rounded: true,
    placeholder: 'your@example.com',
    disabled: false,
    required: false,
  },
};

export const InputWithPrefixStory: Story = {
  args: {
    rounded: true,
    placeholder: 'Price',
    disabled: false,
    prefix: '$',
  },
};

export const InputWithPrefixSuffixStory: Story = {
  args: {
    rounded: true,
    placeholder: 'Price',
    disabled: false,
    prefix: '$',
    suffix: (
      <select name="currency">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
    ),
  },
};
