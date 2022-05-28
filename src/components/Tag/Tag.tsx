import React from 'react';
import styled from 'styled-components';

import { ReactComponent as IconRemove } from '../../assets/images/icon-remove.svg';

const Button = styled.button`
  align-items: center;
  background-color: hsl(129, 47%, 86%);
  border: none;
  border-radius: 4px;
  color: green;
  display: flex;
  font-weight: 700;
  overflow: hidden;
  padding: 0;

  & > span {
    padding: 8px;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:where(:not(.toRemove)) {
    background-color: green;
    color: white;
  }

  &.toRemove > span:nth-of-type(2n) {
    background-color: green;
  }

  &.toRemove:hover > span:nth-of-type(2n) {
    background-color: black;
  }
`;

interface TagProps {
  added: boolean;
  category: string;
  onClick: () => void;
}

function Tag({ added = false, category, onClick }: TagProps) {
  return (
    <Button onClick={onClick} type='button' className={added ? 'toRemove' : ''}>
      <span>{category}</span>
      {added && (
        <span>
          <IconRemove />
        </span>
      )}
    </Button>
  );
}

export default Tag;
