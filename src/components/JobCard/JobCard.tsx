import React from 'react';
import Badge from '../Badge/Badge';
import Tag from '../Tag/Tag';
import { Company, Header, List, Title, Wrapper } from './JobCard.style';

import { Job } from './JobCard.types';

function JobCard(job: Job) {
  return (
    <Wrapper className={job.featured ? 'feat' : ''}>
      <div>
        <Header>
          <Company>{job.company}</Company>
          <div>
            {job.new && <Badge type='new' />}
            {job.featured && <Badge type='feat' />}
          </div>
        </Header>
        <Title>{job.position}</Title>
        <List className='bullet'>
          <li>{job.postedAt}</li>
          <li>{job.contract}</li>
          <li>{job.location}</li>
        </List>
      </div>
      <List>
        <li>
          <Tag category={job.role} onClick={() => {}} />
        </li>
        <li>
          <Tag category={job.level} onClick={() => {}} />
        </li>
        {job.languages.map((lang) => (
          <li key={lang}>
            <Tag category={lang} onClick={() => {}} />
          </li>
        ))}
        {job.tools.map((tool) => (
          <li key={tool}>
            <Tag category={tool} onClick={() => {}} />
          </li>
        ))}
      </List>
    </Wrapper>
  );
}

export default JobCard;