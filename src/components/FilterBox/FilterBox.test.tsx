import { render, screen } from '@testing-library/react';
import React from 'react';

import Theme from '../../Theme';
import FilterBox from './FilterBox';

describe('FilterBox test', () => {
  test('should return nothing when no categories', () => {
    render(<FilterBox />);

    expect(screen.queryByLabelText(/filter-box/i)).not.toBeInTheDocument();
  });

  test('should return nothing when categories is empty', () => {
    render(<FilterBox categories={[]} />);

    expect(screen.queryByLabelText(/filter-box/i)).not.toBeInTheDocument();
  });

  test('should return contains JavaScript', () => {
    render(
      <Theme>
        <FilterBox categories={['JavaScript']} />
      </Theme>
    );

    expect(screen.queryByLabelText(/filter-box/i)).toBeInTheDocument();
    expect(screen.queryByText(/javascript/i)).toBeInTheDocument();
  });
});
