import { render, screen } from '@testing-library/react';
import React from 'react';

import data from '../../fixtures/data.json';
import Theme from '../../Theme';
import JobCard from './JobCard';
import { Job } from './JobCard.types';

const jobs = data as Job[];

describe('JobCard tset', () => {
  test('should render and match snapshot', () => {
    const { asFragment } = render(
      <Theme>
        <JobCard {...jobs[0]} />
      </Theme>
    );

    expect(screen.getByText(jobs[0].company)).toBeInTheDocument();
    expect(screen.getByText(jobs[0].position)).toBeInTheDocument();
    expect(screen.getByText(jobs[0].postedAt)).toBeInTheDocument();
    expect(screen.getByText(jobs[0].contract)).toBeInTheDocument();
    expect(screen.getByText(jobs[0].location)).toBeInTheDocument();
    expect(screen.getByText(jobs[0].languages[0])).toBeInTheDocument();
    expect(screen.getByText(/new/i)).toBeInTheDocument();
    expect(screen.getByText(/featured/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
