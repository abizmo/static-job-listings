import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Theme from '../../Theme';
import FilterBox from './FilterBox';

describe('FilterBox test', () => {
  let handleClear: () => void;

  beforeEach(() => {
    handleClear = jest.fn();
  });

  afterEach(() => {
    cleanup();
  });

  test('should return nothing when no categories', () => {
    render(<FilterBox onClear={handleClear} />);

    expect(screen.queryByLabelText(/filter-box/i)).not.toBeInTheDocument();
  });

  test('should return nothing when categories is empty', () => {
    render(<FilterBox categories={[]} onClear={handleClear} />);

    expect(screen.queryByLabelText(/filter-box/i)).not.toBeInTheDocument();
  });

  test('should return contains JavaScript', () => {
    render(
      <Theme>
        <FilterBox categories={['JavaScript']} onClear={handleClear} />
      </Theme>
    );

    expect(screen.queryByLabelText(/filter-box/i)).toBeInTheDocument();
    expect(screen.queryByText(/javascript/i)).toBeInTheDocument();
  });

  test('should call onClear', () => {
    render(
      <Theme>
        <FilterBox categories={['JavaScript']} onClear={handleClear} />
      </Theme>
    );

    const clearButton = screen.getByRole('button', { name: /clear/i });
    fireEvent.click(clearButton);
    expect(handleClear).toHaveBeenCalled();
  });
});
