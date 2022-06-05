import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import JobCard from './JobCard';

export default {
  title: 'Components/JobCard',
  component: JobCard,
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => (
  <JobCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 1,
  company: 'Photosnap',
  logo: './images/photosnap.svg',
  new: true,
  featured: true,
  position: 'Senior Frontend Developer',
  role: 'Frontend',
  level: 'Senior',
  postedAt: '1d ago',
  contract: 'Full Time',
  location: 'USA Only',
  languages: ['HTML', 'CSS', 'JavaScript'],
  tools: [],
};
