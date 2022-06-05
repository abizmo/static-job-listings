import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import FilterBox from './FilterBox';

export default {
  title: 'Components/FilterBox',
  component: FilterBox,
} as ComponentMeta<typeof FilterBox>;

const Template: ComponentStory<typeof FilterBox> = (args) => (
  <FilterBox {...args} />
);

export const Empty = Template.bind({});
Empty.args = {};

export const Filled = Template.bind({});
Filled.args = {
  categories: ['Frontend', 'CSS', 'JavaScript'],
};
