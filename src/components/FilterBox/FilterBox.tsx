import React from 'react';
import Tag from '../Tag/Tag';

interface FilterBoxProps {
  categories?: string[];
}

function FilterBox({ categories }: FilterBoxProps): JSX.Element | null {
  if (!categories || !categories.length) return null;
  return (
    <div aria-label='filter-box'>
      {categories.map((category) => (
        <Tag category={category} added onClick={() => {}} key={category} />
      ))}
    </div>
  );
}

export default FilterBox;
