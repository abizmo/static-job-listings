import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tag from './Tag';

export default {
  title: 'Layout/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const AddCategory = Template.bind({});
AddCategory.args = {
  category: 'JavaScript',
  onClick: () => {},
};

export const RemoveCategory = Template.bind({});
RemoveCategory.args = {
  added: true,
  category: 'JavaScript',
  onClick: () => {},
};
