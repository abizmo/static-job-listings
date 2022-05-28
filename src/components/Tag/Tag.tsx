import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

interface TagProps {
  added: boolean;
  category: string;
  onAdd?: () => void;
  onRemove?: () => void;
}

function Tag({ added = false, category, onAdd, onRemove }: TagProps) {
  return (
    <Wrapper>
      <button onClick={onAdd} type='button'>
        {category}
      </button>
      {added && (
        <button onClick={onRemove} type='button'>
          X
        </button>
      )}
    </Wrapper>
  );
}

export default Tag;
