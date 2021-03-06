import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: 'account',
  src: './images/account.svg',
};
