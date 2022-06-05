import React from 'react';
import Button from '../Button/Button';
import Tag from '../Tag/Tag';
import { Categories, Wrapper } from './FilterBox.style';

interface FilterBoxProps {
  categories?: string[];
}

function FilterBox({ categories }: FilterBoxProps): JSX.Element | null {
  if (!categories || !categories.length) return null;
  return (
    <Wrapper>
      <Categories>
        {categories.map((category) => (
          <Tag category={category} added onClick={() => {}} key={category} />
        ))}
      </Categories>
      <Button>Clear</Button>
    </Wrapper>
  );
}

export default FilterBox;
