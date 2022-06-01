import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const New = Template.bind({});
New.args = {
  type: 'new',
};

export const Featured = Template.bind({});
Featured.args = {
  type: 'feat',
};
