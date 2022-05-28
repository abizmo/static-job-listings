import React from 'react';
import styled from 'styled-components';

import { ReactComponent as IconRemove } from '../../assets/images/icon-remove.svg';

const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors[200]};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors[500]};
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
    background-color: ${({ theme }) => theme.colors[500]};
    color: white;
  }

  &.toRemove > span:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.colors[500]};
  }

  &.toRemove:hover > span:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.colors[800]};
  }
`;

interface TagProps {
  /**
   * is filtered by this category
   */
  added?: boolean;
  /**
   * Tag content
   */
  category: string;
  /**
   * Click handler
   */
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
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
