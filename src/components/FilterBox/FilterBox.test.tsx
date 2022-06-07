import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Theme from '../../Theme';
import FilterBox from './FilterBox';

describe('FilterBox test', () => {
  let handleClear: () => void;
  let handleRemove: () => void;

  beforeEach(() => {
    handleClear = jest.fn();
    handleRemove = jest.fn();
  });

  afterEach(() => {
    cleanup();
  });

  test('should return nothing when no categories', () => {
    render(<FilterBox onClear={handleClear} onRemove={handleRemove} />);

    expect(screen.queryByLabelText(/filter-box/i)).not.toBeInTheDocument();
  });

  test('should return nothing when categories is empty', () => {
    render(
      <FilterBox
        categories={[]}
        onClear={handleClear}
        onRemove={handleRemove}
      />
    );

    expect(screen.queryByLabelText(/filter-box/i)).not.toBeInTheDocument();
  });

  test('should return contains JavaScript', () => {
    render(
      <Theme>
        <FilterBox
          categories={['JavaScript']}
          onClear={handleClear}
          onRemove={handleRemove}
        />
      </Theme>
    );

    expect(screen.queryByLabelText(/filter-box/i)).toBeInTheDocument();
    expect(screen.queryByText(/javascript/i)).toBeInTheDocument();
  });

  test('should call onClear', () => {
    render(
      <Theme>
        <FilterBox
          categories={['JavaScript']}
          onClear={handleClear}
          onRemove={handleRemove}
        />
      </Theme>
    );

    const clearButton = screen.getByRole('button', { name: /clear/i });
    fireEvent.click(clearButton);
    expect(handleClear).toHaveBeenCalled();
  });

  test('should call onRemove', () => {
    render(
      <Theme>
        <FilterBox
          categories={['JavaScript']}
          onClear={handleClear}
          onRemove={handleRemove}
        />
      </Theme>
    );

    const categoryButton = screen.getByRole('button', { name: /javascript/i });
    fireEvent.click(categoryButton);
    expect(handleRemove).toHaveBeenCalled();
  });
});
