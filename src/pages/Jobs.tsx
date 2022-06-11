import React, { useEffect, useState } from 'react';

import FilterBox from '../components/FilterBox/FilterBox';
import JobCard from '../components/JobCard/JobCard';
import { Job } from '../components/JobCard/JobCard.types';
import data from '../fixtures/data.json';
import { Container, Header, JobList } from './Jobs.style';

const jobsData = data as Job[];

function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  const handleRemoveFilter = (category: string) => {
    setFilters((prev) => prev.filter((c) => c !== category));
  };

  const handleAddFilter = (category: string) => {
    if (filters.includes(category)) return;
    setFilters((prev) => [...prev, category]);
  };

  const filterJobs = (job: Job) => {
    if (filters.length === 0) return true;
    if (
      filters.every((c) =>
        [
          job.role,
          job.level,
          job.contract,
          ...job.languages,
          ...job.tools,
        ].includes(c)
      )
    )
      return true;
    return false;
  };

  return (
    <>
      <Header />
      <Container>
        <FilterBox
          categories={filters}
          onClear={() => setFilters([])}
          onRemove={handleRemoveFilter}
        />
        <JobList>
          {jobs.filter(filterJobs).map((job) => (
            <li key={job.id}>
              <JobCard {...job} onFilter={handleAddFilter} />
            </li>
          ))}
        </JobList>
      </Container>
    </>
  );
}

export default Jobs;
