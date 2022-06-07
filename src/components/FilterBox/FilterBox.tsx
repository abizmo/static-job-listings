import React from 'react';
import Button from '../Button/Button';
import Tag from '../Tag/Tag';
import { Categories, Wrapper } from './FilterBox.style';

interface FilterBoxProps {
  categories?: string[];
  onClear: () => void;
}

function FilterBox({
  categories,
  onClear,
}: FilterBoxProps): JSX.Element | null {
  if (!categories || !categories.length) return null;
  return (
    <Wrapper>
      <Categories>
        {categories.map((category) => (
          <Tag category={category} added onClick={() => {}} key={category} />
        ))}
      </Categories>
      <Button onClick={onClear}>Clear</Button>
    </Wrapper>
  );
}

export default FilterBox;
