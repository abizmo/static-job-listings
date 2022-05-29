import { fireEvent } from '@storybook/testing-library';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import Theme from '../../Theme';

import Tag from './Tag';

describe('Tag tests', () => {
  const clickHandler = jest.fn();
  const category = 'Senior';

  describe('Tag not added', () => {
    let button: Node;

    beforeEach(() => {
      render(
        <Theme>
          <Tag category={category} onClick={clickHandler} />
        </Theme>
      );

      button = screen.getByText(category);
    });

    afterEach(() => {
      cleanup();
    });

    test('should be a button which contains Senior', () => {
      expect(button).toBeInTheDocument();
    });

    test('should call clickHandler when click', () => {
      fireEvent.click(button);
      expect(clickHandler).toHaveBeenCalled();
    });
  });

  describe('Tag added', () => {
    test('should show remove icon', () => {
      render(
        <Theme>
          <Tag added={true} category={category} onClick={clickHandler} />
        </Theme>
      );
      expect(screen.getByTitle(/remove/i)).toBeInTheDocument();
    });
  });
});
